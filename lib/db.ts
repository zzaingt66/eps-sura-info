import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;
let initialized = false;

function getClient(): Client {
  if (!client) {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;

    if (!url) {
      throw new Error("TURSO_DATABASE_URL environment variable is not set");
    }

    client = createClient({ url, authToken });
  }
  return client;
}

const MIGRATIONS = [
  `CREATE TABLE IF NOT EXISTS pqrsf (
    id                  INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo                TEXT    NOT NULL,
    nombre              TEXT    NOT NULL,
    email               TEXT    NOT NULL,
    telefono            TEXT,
    asunto              TEXT    NOT NULL,
    descripcion         TEXT    NOT NULL,
    estado              TEXT    NOT NULL DEFAULT 'nuevo',
    fecha_creacion      INTEGER NOT NULL,
    fecha_actualizacion INTEGER NOT NULL,
    deleted_at          INTEGER
  )`,
  `ALTER TABLE pqrsf ADD COLUMN respuesta TEXT`,
  `ALTER TABLE pqrsf ADD COLUMN fecha_respuesta INTEGER`,
  `CREATE TABLE IF NOT EXISTS admins (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT    NOT NULL UNIQUE,
    password_hash TEXT    NOT NULL
  )`,
];

export async function getDb(): Promise<Client> {
  const db = getClient();

  if (!initialized) {
    for (const sql of MIGRATIONS) {
      try {
        await db.execute(sql);
      } catch {
        // ALTER TABLE throws if column already exists — safe to ignore
      }
    }
    initialized = true;
  }

  return db;
}
