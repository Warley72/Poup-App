import { create } from "zustand"
import { IExpensesState } from "@/app/(finance)/dashboard/interfaces/FinanceStore"
import { getUserExpenses } from "@/services/api"

export const useExpensesStore = create<IExpensesState>((set, get) => ({
    expenses: [],

    setExpenses: (expenses) => set({ expenses }),

    fetchExpenses: async (userId) => {
        const data = await getUserExpenses(userId)

        console.log("API response =>", data)

        const normalized = data.map((e: any) => ({
            id: e.id,
            name: e.name,
            value: e.amount,
            category: e.category?.name ?? "Custos fixos"
        }))

        set({ expenses: normalized })
    },

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
        const { expenses } = get()
        const categories = [
            "Custos fixos",
            "Conforto",
            "Prazeres",
            "Metas",
            "Investimentos",
            "Conhecimentos",
        ]

        return categories.map((cat) => ({
            name: cat,
            total: expenses
                .filter((e) => e.category === cat)
                .reduce((sum, e) => sum + e.value, 0),
        }))
    },
}))
