import ExpensePrismaInMemory from "../repositories/in-memory/ExpensePrismaInMemory";
import ExpensePrismaRepositories from "../repositories/prisma/ExpensePrismaRepositories";

import { Expense } from "../models/Expense";

class ExpenseService {
    constructor(
        private _inMemoryExpensePrisma: ExpensePrismaInMemory | ExpensePrismaRepositories
    ) {}

    async getAll(): Promise<{ data: Expense[] }> {
        const expenseData = await this._inMemoryExpensePrisma.getAll();
        return { data: expenseData };
    }

    async getById(id: string): Promise<{ data: Expense }> {
        const expenseData = await this._inMemoryExpensePrisma.getById(id);

        if (!expenseData) {
            throw new Error("Esse usuario nao existe");
        }
        return { data: expenseData };
    }

    async create(data: Expense): Promise<{ data: Expense }> {
        const expenseData = await this._inMemoryExpensePrisma.create(data);
        return { data: expenseData };
    }

    async update(id: string, data: Expense): Promise<{ id: string; data: Expense }> {
        const expenseData = await this._inMemoryExpensePrisma.update(id, data);
        return { id, data: expenseData };
    }

    async delete(id: string): Promise<{ id: string }> {
        await this._inMemoryExpensePrisma.delete(id);
        return { id };
    }
}
export default ExpenseService;
