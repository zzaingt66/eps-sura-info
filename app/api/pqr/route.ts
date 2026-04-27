import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import {
  createPqrsfSchema,
  listFiltersSchema,
  type PqrsfRow,
} from "@/lib/schemas/pqrsf";

// GET /api/pqr — lista todos los PQRSF activos con filtros opcionales por tipo y estado
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const filters = listFiltersSchema.safeParse({
      tipo: searchParams.get("tipo") ?? undefined,
      estado: searchParams.get("estado") ?? undefined,
    });

    if (!filters.success) {
      return NextResponse.json(
        { error: "Filtros inválidos", details: filters.error.issues },
        { status: 400 }
      );
    }

    const db = await getDb();

    const conditions: string[] = ["deleted_at IS NULL"];
    const args: (string | number)[] = [];

    if (filters.data.tipo) {
      conditions.push("tipo = ?");
      args.push(filters.data.tipo);
    }

    if (filters.data.estado) {
      conditions.push("estado = ?");
      args.push(filters.data.estado);
    }

    const where = conditions.join(" AND ");
    const result = await db.execute({
      sql: `SELECT * FROM pqrsf WHERE ${where} ORDER BY fecha_creacion DESC`,
      args,
    });

    const rows = result.rows as unknown as PqrsfRow[];
    return NextResponse.json({ data: rows });
  } catch (error) {
    console.error("[GET /api/pqr]", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// POST /api/pqr — crea un nuevo PQRSF
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = createPqrsfSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { tipo, nombre, email, telefono, asunto, descripcion } = parsed.data;
    const now = Math.floor(Date.now() / 1000);

    const db = await getDb();
    const result = await db.execute({
      sql: `
        INSERT INTO pqrsf (tipo, nombre, email, telefono, asunto, descripcion, estado, fecha_creacion, fecha_actualizacion)
        VALUES (?, ?, ?, ?, ?, ?, 'nuevo', ?, ?)
      `,
      args: [tipo, nombre, email, telefono ?? null, asunto, descripcion, now, now],
    });

    const insertedId = Number(result.lastInsertRowid);

    const row = await db.execute({
      sql: "SELECT * FROM pqrsf WHERE id = ?",
      args: [insertedId],
    });

    const newRecord = row.rows[0] as unknown as PqrsfRow;
    return NextResponse.json({ data: newRecord }, { status: 201 });
  } catch (error) {
    console.error("[POST /api/pqr]", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
