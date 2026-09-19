import ApplicationsTable from "./components/ApplicationsTable";
import { getApiUrl } from "@/utils/api";
import { ALL_STATUS, LIST_LIMIT } from "@/utils/constants";

type ListSearchParams = {
  page?: string;
  status?: string;
};

export default async function ApplicationsListPage({
  searchParams,
}: {
  searchParams: Promise<ListSearchParams>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const status = params.status ?? ALL_STATUS;
  const applicationQuery = new URLSearchParams({ page: String(page), limit: String(LIST_LIMIT) });
  if (status !== ALL_STATUS) applicationQuery.set("status", status);
  const applicationResponse = await fetch(
    `${getApiUrl()}/solicitudes?${applicationQuery.toString()}`,
  );
  const applicationBody = await applicationResponse.json();
  return (
    <div className="mx-auto max-w-4xl text-zinc-900">
      <h1 className="text-2xl font-semibold text-zinc-900">Solicitudes</h1>
      <p className="mt-1 text-sm text-zinc-600">
        Listado con paginación y filtro por estado.
      </p>
      <div className="mt-6">
        <ApplicationsTable
          rows={applicationBody?.data ?? []}
          total={Number(applicationBody?.total ?? 0)}
          page={Number(applicationBody?.page ?? page)}
          limit={Number(applicationBody?.limit ?? LIST_LIMIT)}
          status={status}
        />
      </div>
    </div>
  );
}
