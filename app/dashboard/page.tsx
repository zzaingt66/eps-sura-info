import { getDb } from "@/lib/db";
import { PqrsfRow } from "@/lib/schemas/pqrsf";
import { DashboardClient } from "./DashboardClient";

export const dynamic = "force-dynamic";

interface AdminPqrsfRow extends PqrsfRow {
  respuesta: string | null;
  fecha_respuesta: number | null;
}

async function fetchAll(): Promise<AdminPqrsfRow[]> {
  const db = await getDb();
  const result = await db.execute(
    "SELECT * FROM pqrsf WHERE deleted_at IS NULL ORDER BY fecha_creacion DESC"
  );
  return result.rows.map((row) => ({ ...row })) as unknown as AdminPqrsfRow[];
}

export default async function DashboardPage() {
  const rows = await fetchAll();
  return <DashboardClient rows={rows} />;
}
