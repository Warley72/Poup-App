export interface Igoals {
    custosFixos: number;
    conforto: number;
    prazeres: number;
    metas: number;
    investimentos: number;
    conhecimentos: number;
}

export interface IcategoryCalculator {
    name: string;
    percent: number;
    spent: number;
}

export interface Icategory {
    name: string;
    percent: number;
    value: number;
}

export interface IfinanceState {
    salary: number;
    goals: Igoals;
    calc: Icategory[];
    totalExpenses: number;
    utilizationPercent: number;
    setSalary: (salary: number) => void;
    setGoals: (goals: Igoals) => void;
}

export interface IExpense {
    id: string;
    category: string;
    name: string;
    value: number;
}

export interface IExpensesState {
    expenses: IExpense[];
    addExpense: (category: string, name: string, value: number) => void;
    removeExpense: (id: string) => void;
    updateExpense: (id: string, name: string, value: number) => void;
    clearExpenses: () => void;
    getCategoryTotals: () => { name: string; total: number }[];
}
