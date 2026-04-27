import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { updateEstadoSchema, type PqrsfRow } from "@/lib/schemas/pqrsf";

type RouteContext = { params: Promise<{ id: string }> };

async function findActiveRecord(id: number): Promise<PqrsfRow | null> {
  const db = await getDb();
  const result = await db.execute({
    sql: "SELECT * FROM pqrsf WHERE id = ? AND deleted_at IS NULL",
    args: [id],
  });
  return (result.rows[0] as unknown as PqrsfRow) ?? null;
}

function parseId(raw: string): number | null {
  const n = Number(raw);
  return Number.isInteger(n) && n > 0 ? n : null;
}

// GET /api/pqr/[id] — obtiene un PQRSF por ID
export async function GET(_req: NextRequest, context: RouteContext) {
  try {
    const { id: rawId } = await context.params;
    const id = parseId(rawId);
    if (!id) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const record = await findActiveRecord(id);
    if (!record) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    }

    return NextResponse.json({ data: record });
  } catch (error) {
    console.error("[GET /api/pqr/[id]]", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// PATCH /api/pqr/[id] — actualiza solo el campo estado
export async function PATCH(request: NextRequest, context: RouteContext) {
  try {
    const { id: rawId } = await context.params;
    const id = parseId(rawId);
    if (!id) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const body = await request.json();

    // Rechazar si incluye campos no permitidos
    const allowedKeys = new Set(["estado"]);
    const extraKeys = Object.keys(body).filter((k) => !allowedKeys.has(k));
    if (extraKeys.length > 0) {
      return NextResponse.json(
        {
          error: "Solo se permite actualizar el campo 'estado'",
          camposNoPermitidos: extraKeys,
        },
        { status: 400 }
      );
    }

    const parsed = updateEstadoSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: parsed.error.issues },
        { status: 400 }
      );
    }

    const record = await findActiveRecord(id);
    if (!record) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    }

    const now = Math.floor(Date.now() / 1000);
    const db = await getDb();
    await db.execute({
      sql: "UPDATE pqrsf SET estado = ?, fecha_actualizacion = ? WHERE id = ?",
      args: [parsed.data.estado, now, id],
    });

    const updated = await findActiveRecord(id);
    return NextResponse.json({ data: updated });
  } catch (error) {
    console.error("[PATCH /api/pqr/[id]]", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// DELETE /api/pqr/[id] — soft delete: marca deleted_at con timestamp actual
export async function DELETE(_req: NextRequest, context: RouteContext) {
  try {
    const { id: rawId } = await context.params;
    const id = parseId(rawId);
    if (!id) {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });
    }

    const record = await findActiveRecord(id);
    if (!record) {
      return NextResponse.json({ error: "No encontrado" }, { status: 404 });
    }

    const now = Math.floor(Date.now() / 1000);
    const db = await getDb();
    await db.execute({
      sql: "UPDATE pqrsf SET deleted_at = ? WHERE id = ?",
      args: [now, id],
    });

    return NextResponse.json({ data: { id, deleted: true } });
  } catch (error) {
    console.error("[DELETE /api/pqr/[id]]", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
