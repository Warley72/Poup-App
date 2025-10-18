export interface Igoals {
    custosFixos: number;
    conforto: number;
    prazeres: number;
    metas: number;
    investimentos: number;
    conhecimentos: number;
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
