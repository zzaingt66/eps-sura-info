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

const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS pqrsf (
    id                 INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo               TEXT    NOT NULL,
    nombre             TEXT    NOT NULL,
    email              TEXT    NOT NULL,
    telefono           TEXT,
    asunto             TEXT    NOT NULL,
    descripcion        TEXT    NOT NULL,
    estado             TEXT    NOT NULL DEFAULT 'nuevo',
    fecha_creacion     INTEGER NOT NULL,
    fecha_actualizacion INTEGER NOT NULL,
    deleted_at         INTEGER
  )
`;

export async function getDb(): Promise<Client> {
  const db = getClient();

  if (!initialized) {
    await db.execute(CREATE_TABLE_SQL);
    initialized = true;
  }

  return db;
}
