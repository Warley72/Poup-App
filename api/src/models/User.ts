import { Expense } from "../models/Expense"
import { Salary } from "../models/Salary"

export interface User {
    id: number;
    name: string;
    password: string;
    createdAt: Date;

    Salary?: Salary[];
    Expense?: Expense[];
}
