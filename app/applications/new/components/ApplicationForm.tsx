'use client';

import { useActionState } from 'react';
import { createApplicationAction } from '../actions/application-action';
import { getFieldError } from '@/utils/form';

export default function ApplicationForm() {
  const [state, formAction, isPending] = useActionState(createApplicationAction, {
    fieldErrors: {},
    globalError: null,
    installment: null,
  });
  return (
    <form action={formAction} className="mt-8 space-y-8">
      {state.globalError && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.globalError}
        </p>
      )}
      {state.installment !== null && (
        <p role="status" className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          Solicitud registrada. Cuota mensual: S/ {state.installment.toFixed(2)}
        </p>
      )}
      <section className="rounded-xl border border-zinc-200 bg-white p-6 text-zinc-900">
        <h2 className="text-base font-semibold">Información del estudiante</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Nombre completo</span>
            <input
              name="fullName"
              type="text"
              placeholder="Juan Perez"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-black"
            />
            {getFieldError(state.fieldErrors, 'fullName') && (
              <span className="mt-1 block text-xs text-red-600">{getFieldError(state.fieldErrors, 'fullName')}</span>
            )}
          </label>
          <label className="block">
            <span className="text-sm font-medium">DNI</span>
            <input
              name="dni"
              type="text"
              inputMode="numeric"
              placeholder="12345678"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-black"
            />
            {getFieldError(state.fieldErrors, 'dni') && (
              <span className="mt-1 block text-xs text-red-600">{getFieldError(state.fieldErrors, 'dni')}</span>
            )}
          </label>
          <label className="block">
            <span className="text-sm font-medium">Correo</span>
            <input
              name="email"
              type="email"
              placeholder="juan.perez@example.com"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-black"
            />
            {getFieldError(state.fieldErrors, 'email') && (
              <span className="mt-1 block text-xs text-red-600">{getFieldError(state.fieldErrors, 'email')}</span>
            )}
          </label>
          <label className="block">
            <span className="text-sm font-medium">Teléfono</span>
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              placeholder="987654321"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-black"
            />
            {getFieldError(state.fieldErrors, 'phone') && (
              <span className="mt-1 block text-xs text-red-600">{getFieldError(state.fieldErrors, 'phone')}</span>
            )}
          </label>
        </div>
      </section>
      <section className="rounded-xl border border-zinc-200 bg-white p-6 text-zinc-900">
        <h2 className="text-base font-semibold">Datos del financiamiento</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Monto (S/)</span>
            <input
              name="amount"
              type="number"
              min={1000}
              max={10000}
              placeholder="3000"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-black"
            />
            {getFieldError(state.fieldErrors, 'amount') && (
              <span className="mt-1 block text-xs text-red-600">{getFieldError(state.fieldErrors, 'amount')}</span>
            )}
          </label>
          <label className="block">
            <span className="text-sm font-medium">Plazo (meses)</span>
            <select
              name="months"
              defaultValue="12"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none focus:border-black"
            >
              <option value="6">6</option>
              <option value="12">12</option>
              <option value="18">18</option>
              <option value="24">24</option>
            </select>
            {getFieldError(state.fieldErrors, 'months') && (
              <span className="mt-1 block text-xs text-red-600">{getFieldError(state.fieldErrors, 'months')}</span>
            )}
          </label>
        </div>
      </section>
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
      >
        {isPending ? 'Enviando...' : 'Enviar solicitud'}
      </button>
    </form>
  );
}
