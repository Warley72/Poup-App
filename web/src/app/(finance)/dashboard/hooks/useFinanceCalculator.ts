import { useMemo } from "react";

import { IcategoryCalculator } from "@/app/(finance)/dashboard/interfaces/FinanceStore"

export function useFinanceCalculator(salary: number, categories: IcategoryCalculator[]) {
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
