const BASE_URL = "http://127.0.0.1:4000";

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error || "Erro desconhecido na API");
    }

    return response.json();
  } catch (err: any) {
    console.error("API Error:", err.message);
    throw err;
  }
}

export const api = {
  getUsers: () => request<any[]>("/users"),
  createUser: (data: any) =>
    request<any>("/users", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getExpenses: () => request<any[]>("/expense"),
  createExpense: (data: any) =>
    request<any>("/expense", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
