import { create } from "zustand";
import { IExpensesState } from "@/app/(finance)/dashboard/interfaces/FinanceStore";

export const useExpensesStore = create<IExpensesState>((set, get) => ({
    expenses: [],

    addExpense: (category, name, value) =>
        set((state) => ({
            expenses: [
                ...state.expenses,
                { id: crypto.randomUUID(), category, name, value },
            ],
        })),

    updateExpense: (id, name, value) =>
        set((state) => ({
            expenses: state.expenses.map((e) =>
                e.id === id ? { ...e, name, value } : e
            ),
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
