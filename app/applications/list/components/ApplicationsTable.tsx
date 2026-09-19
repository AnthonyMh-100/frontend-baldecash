'use client';

import Link from 'next/link';
import { STATUS_FILTER_OPTIONS } from '@/utils/constants';
import { buildHref } from '@/utils/list';

export type ApplicationRow = {
  id: number;
  fullName: string;
  dni: string;
  email: string;
  phone: string;
  amount: string | number;
  months: number;
  annualRate: number;
  installment: string | number;
  status: string;
};

type ApplicationsTableProps = {
  rows: ApplicationRow[];
  total: number;
  page: number;
  limit: number;
  status: string;
};

export default function ApplicationsTable({ rows, total, page, limit, status }: ApplicationsTableProps) {
  const totalPages = Math.ceil(total / limit);
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        {STATUS_FILTER_OPTIONS.map((option) => (
          <Link
            key={option.value}
            href={buildHref(1, option.value)}
            className={`rounded-full border px-3 py-1 font-medium ${
              status === option.value
                ? 'border-black bg-black text-white'
                : 'border-zinc-300 bg-white text-zinc-700 hover:border-black'
            }`}
          >
            {option.label}
          </Link>
        ))}
      </div>
      <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm text-zinc-900">
          <thead className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase text-zinc-500">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">DNI</th>
              <th className="px-4 py-3">Monto</th>
              <th className="px-4 py-3">Plazo</th>
              <th className="px-4 py-3">Cuota</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-zinc-100 last:border-0">
                <td className="px-4 py-3 font-medium">{row.fullName}</td>
                <td className="px-4 py-3">{row.dni}</td>
                <td className="px-4 py-3">S/ {row.amount}</td>
                <td className="px-4 py-3">{row.months}</td>
                <td className="px-4 py-3">S/ {row.installment}</td>
                <td className="px-4 py-3">{row.status}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-zinc-500">
                  Sin resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between text-sm text-zinc-700">
        <span>
          Página {page} de {totalPages} · {total} registros
        </span>
        <div className="flex gap-2">
          <Link
            href={buildHref(Math.max(1, page - 1), status)}
            aria-disabled={page <= 1}
            className={`rounded-lg border px-3 py-1 ${page <= 1 ? 'pointer-events-none opacity-40' : 'bg-white hover:border-black'}`}
          >
            Anterior
          </Link>
          <Link
            href={buildHref(Math.min(totalPages, page + 1), status)}
            aria-disabled={page >= totalPages}
            className={`rounded-lg border px-3 py-1 ${page >= totalPages ? 'pointer-events-none opacity-40' : 'bg-white hover:border-black'}`}
          >
            Siguiente
          </Link>
        </div>
      </div>
    </div>
  );
}
