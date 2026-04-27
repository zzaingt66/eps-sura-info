import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { verifyToken, COOKIE_NAME } from "@/lib/auth";
import { LayoutDashboard } from "lucide-react";
import { LogoutButton } from "./LogoutButton";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  const session = token ? await verifyToken(token) : null;
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={18} className="text-brand-700" strokeWidth={1.8} />
            <div>
              <span className="font-display text-sm font-semibold text-brand-950">
                Panel PQRSF
              </span>
              <span className="ml-2 text-xs text-slate-400">VitaNova IPS</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-slate-500 sm:block">
              {session.sub}
            </span>
            <LogoutButton />
          </div>
        </div>

        {/* Breadcrumb sub-row */}
        <div className="border-t border-slate-100 bg-slate-50/80">
          <div className="mx-auto flex h-9 max-w-7xl items-center px-4 sm:px-6">
            <Link
              href="/dashboard"
              className="text-xs font-medium text-brand-700 hover:underline"
            >
              Inicio
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
