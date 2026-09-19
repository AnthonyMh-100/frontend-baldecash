'use client';

export default function ApplicationForm() {
  return (
    <form className="mt-8 space-y-8">
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
          </label>
          <label className="block">
            <span className="text-sm font-medium">Correo</span>
            <input
              name="email"
              type="email"
              placeholder="juan.perez@example.com"
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-black"
            />
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
          </label>
        </div>
      </section>
      <button
        type="submit"
        className="w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
      >
        Enviar solicitud
      </button>
    </form>
  );
}
