export const getFieldError = (fieldErrors: Record<string, string[]>, field: string): string | null => {
  const messages = fieldErrors[field];
  return messages && messages.length > 0 ? messages.join('. ') : null;
};
