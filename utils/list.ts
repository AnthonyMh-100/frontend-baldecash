import { ALL_STATUS } from './constants';

export const buildHref = (page: number, status: string): string => {
  const params = new URLSearchParams({ page: String(page) });
  if (status !== ALL_STATUS) params.set('status', status);
  return `/applications/list?${params.toString()}`;
};
