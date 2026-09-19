import Link from 'next/link';

export default function ApplicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold text-zinc-900">BaldeCash</span>
          <div className="flex gap-4 text-sm font-medium">
            <Link className="text-zinc-600 hover:text-black" href="/applications/new">
              Nueva
            </Link>
            <Link className="text-zinc-600 hover:text-black" href="/applications/list">
              Listado
            </Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10">{children}</main>
    </div>
  );
}
