import ApplicationForm from './components/ApplicationForm';

export default function NewApplicationPage() {
  return (
    <div className="mx-auto max-w-2xl text-zinc-900">
      <h1 className="text-2xl font-semibold text-zinc-900">Nueva solicitud</h1>
      <p className="mt-1 text-sm text-zinc-600">Completa tu información para solicitar financiamiento.</p>
      <ApplicationForm />
    </div>
  );
}
