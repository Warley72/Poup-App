import { create } from "zustand";

interface Expense {
  id: string;
  category: string;
  name: string;
  value: number;
}

interface ExpensesState {
  expenses: Expense[];
  addExpense: (category: string, name: string, value: number) => void;
  removeExpense: (id: string) => void;
  clearExpenses: () => void;
  getCategoryTotals: () => { name: string; total: number }[];
}

export const useExpensesStore = create<ExpensesState>((set, get) => ({
  expenses: [],

  addExpense: (category, name, value) =>
    set((state) => ({
      expenses: [
        ...state.expenses,
        { id: crypto.randomUUID(), category, name, value },
      ],
    })),

  removeExpense: (id) =>
    set((state) => ({
      expenses: state.expenses.filter((e) => e.id !== id),
    })),

  clearExpenses: () => set({ expenses: [] }),

  getCategoryTotals: () => {
    const { expenses } = get();
    const categories = [
      "Custos fixos",
      "Conforto",
      "Prazeres",
      "Metas",
      "Investimentos",
      "Conhecimentos",
    ];

    return categories.map((cat) => ({
      name: cat,
      total: expenses
        .filter((e) => e.category === cat)
        .reduce((sum, e) => sum + e.value, 0),
    }));
  },
}));
