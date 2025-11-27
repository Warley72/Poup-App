import { create } from "zustand";
import { IfinanceState } from "@/app/(finance)/dashboard/interfaces/FinanceStore";

export const useFinanceStore = create<
    IfinanceState & {
        expenses: {
            id: string;
            name: string;
            value: number;
            category: string;
        }[];
        addExpense: (expense: {
            id: string;
            name: string;
            value: number;
            category: string;
        }) => void;
        deleteExpense: (id: string) => void;
        groupedByCategory: () => {
            name: string;
            value: number;
            color: string;
        }[];
    }
>((set, get) => ({
    salary: 0,

    goals: {
        custosFixos: 0,
        conforto: 0,
        prazeres: 0,
        metas: 0,
        investimentos: 0,
        conhecimentos: 0,
    },

    calc: [
        { name: "Custos fixos", percent: 0, value: 0 },
        { name: "Conforto", percent: 0, value: 0 },
        { name: "Prazeres", percent: 0, value: 0 },
        { name: "Metas", percent: 0, value: 0 },
        { name: "Investimentos", percent: 0, value: 0 },
        { name: "Conhecimentos", percent: 0, value: 0 },
    ],

    totalExpenses: 0,
    utilizationPercent: 0,

    expenses: [],

    setSalary: (salary) => {
        const { goals } = get();
        const calc = [
            { name: "Custos fixos", percent: goals.custosFixos },
            { name: "Conforto", percent: goals.conforto },
            { name: "Prazeres", percent: goals.prazeres },
            { name: "Metas", percent: goals.metas },
            { name: "Investimentos", percent: goals.metas },
            { name: "Conhecimentos", percent: goals.conhecimentos },
        ].map((item) => ({
            ...item,
            value: (salary * item.percent) / 100,
        }));

        const totalExpenses = calc.reduce((acc, cat) => acc + cat.value, 0);
        const utilizationPercent =
            salary > 0 ? Math.round((totalExpenses / salary) * 100) : 0;

        set({ salary, calc, totalExpenses, utilizationPercent });
    },

    setGoals: (goals) => {
        const { salary } = get();
        const calc = [
            { name: "Custos fixos", percent: goals.custosFixos },
            { name: "Conforto", percent: goals.conforto },
            { name: "Prazeres", percent: goals.prazeres },
            { name: "Metas", percent: goals.metas },
            { name: "Investimentos", percent: goals.metas },
            { name: "Conhecimentos", percent: goals.conhecimentos },
        ].map((item) => ({
            ...item,
            value: (salary * item.percent) / 100,
        }));

        const totalExpenses = calc.reduce((acc, cat) => acc + cat.value, 0);
        const utilizationPercent =
            salary > 0 ? Math.round((totalExpenses / salary) * 100) : 0;

        set({ goals, calc, totalExpenses, utilizationPercent });
    },

    addExpense: (expense) =>
        set((state) => ({
            expenses: [...state.expenses, expense],
        })),

    deleteExpense: (id) =>
        set((state) => ({
            expenses: state.expenses.filter((e) => e.id !== id),
        })),

    groupedByCategory: () => {
        const { expenses } = get();
        const map = new Map<string, number>();

        for (const e of expenses) {
            map.set(e.category, (map.get(e.category) ?? 0) + e.value);
        }

        return Array.from(map.entries()).map(([name, value]) => ({
            name,
            value,
            color: getCategoryColor(name),
        }));
    },
}));

function getCategoryColor(category: string) {
    const colors: Record<string, string> = {
        "Custos fixos": "#ef4444",
        Conforto: "#22c55e",
        Prazeres: "#facc15",
        Metas: "#3b82f6",
        Conhecimentos: "#a855f7",
        Investimentos: "#14b8a6",
    };
    return colors[category] ?? "#9ca3af";
}
