/**
 * Seed script — run once to create the admins table and insert the initial admin user.
 * Usage:  node --env-file=.env.local scripts/seed-admin.mjs
 */

import { createClient } from "@libsql/client";
import bcrypt from "bcryptjs";

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url) {
  console.error("TURSO_DATABASE_URL is not set");
  process.exit(1);
}

const db = createClient({ url, authToken });

const USERNAME = process.env.ADMIN_USERNAME ?? "gSoto";
const PASSWORD = process.env.ADMIN_PASSWORD ?? "sm230126";

async function seed() {
  // Ensure admins table exists
  await db.execute(`
    CREATE TABLE IF NOT EXISTS admins (
      id            INTEGER PRIMARY KEY AUTOINCREMENT,
      username      TEXT    NOT NULL UNIQUE,
      password_hash TEXT    NOT NULL
    )
  `);

  // Ensure pqrsf columns exist (idempotent)
  for (const col of ["respuesta TEXT", "fecha_respuesta INTEGER"]) {
    try {
      await db.execute(`ALTER TABLE pqrsf ADD COLUMN ${col}`);
    } catch {
      // column already exists
    }
  }

  const hash = await bcrypt.hash(PASSWORD, 12);

  // Upsert: insert or ignore if username already exists
  await db.execute({
    sql: `INSERT OR IGNORE INTO admins (username, password_hash) VALUES (?, ?)`,
    args: [USERNAME, hash],
  });

  console.log(`Admin user "${USERNAME}" seeded successfully.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
