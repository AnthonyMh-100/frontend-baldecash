"use server";

import { getApiUrl } from "@/utils/api";

export type ApplicationFormState = {
  fieldErrors: Record<string, string[]>;
  globalError: string | null;
  installment: number | null;
};

export const createApplicationAction = async (
  _prevState: ApplicationFormState,
  formData: FormData,
) => {
  const payload = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    dni: String(formData.get("dni") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    amount: Number(formData.get("amount")),
    months: Number(formData.get("months")),
  };

  const response = await fetch(`${getApiUrl()}/solicitudes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const body = await response.json();

  if (!response.ok) {
    if (response.status === 422 && Array.isArray(body?.errors)) {
      const fieldErrors = body.errors
        .filter((item: { field?: string }) => item?.field)
        .reduce(
          (acc: Record<string, string[]>, item: { field: string; messages?: string[] }) => ({
            ...acc,
            [item.field]: item.messages ?? [],
          }),
          {},
        );
      return { fieldErrors, globalError: null, installment: null };
    }
    return {
      fieldErrors: {},
      globalError: "No se pudo enviar la solicitud. Inténtalo de nuevo.",
      installment: null,
    };
  }
  return {
    fieldErrors: {},
    globalError: null,
    installment: Number(body?.data?.installment ?? null),
  };
};
