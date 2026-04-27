import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb } from "@/lib/db";
import { signToken, COOKIE_NAME, MAX_AGE_SECONDS } from "@/lib/auth";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Credenciales inválidas" },
      { status: 400 }
    );
  }

  const { username, password } = parsed.data;

  const db = await getDb();
  const result = await db.execute({
    sql: "SELECT password_hash FROM admins WHERE username = ?",
    args: [username],
  });

  const row = result.rows[0] as unknown as { password_hash: string } | undefined;

  // Constant-time comparison — always run bcrypt even if user not found
  const hash = row?.password_hash ?? "$2b$12$invalidhashpaddingtorejectfastly";
  const valid = await bcrypt.compare(password, hash);

  if (!row || !valid) {
    return NextResponse.json(
      { error: "Usuario o contraseña incorrectos" },
      { status: 401 }
    );
  }

  const token = await signToken(username);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE_SECONDS,
    path: "/",
  });

  return response;
}
