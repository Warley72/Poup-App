import { useMemo } from "react";

interface Category {
    name: string;
    percent: number;
    spent?: number;
}

export function useFinanceCalculator(salary: number, categories: Category[]) {
    return useMemo(() => {
        const categoriesWithValues = categories.map((cat) => ({
            ...cat,
            value: (salary * cat.percent) / 100,
        }));

        const totalSpent = categoriesWithValues.reduce(
            (acc, cat) => acc + (cat.spent ?? 0),
            0
        );

        const utilizationPercent = salary
            ? Math.round((totalSpent / salary) * 100)
            : 0;

        return {
            categories: categoriesWithValues,
            totalExpenses: totalSpent,
            utilizationPercent,
        };
    }, [salary, categories]);
}
