const configuredApiUrl = import.meta.env.VITE_API_URL?.trim();

export const API_BASE_URL = configuredApiUrl?.replace(/\/+$/, "") ?? "";

export function apiEndpoint(path: string): string | null {
  if (!API_BASE_URL) return null;
  return `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;
}
