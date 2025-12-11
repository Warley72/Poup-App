import ExpensePrismaRepositories from "../repositories/prisma/ExpensePrismaRepositories"

import { Expense } from "../models/Expense"

class ExpenseService {

    constructor(private __inMemoryExpensePrisma: ExpensePrismaRepositories) { }

    async getall(): Promise<{ data: Expense[] }> {
        const expenseData = await this.__inMemoryExpensePrisma.getAll()
        return { data: expenseData }
    }

    async getById(id: string): Promise<{ data: Expense }> {
        const expenseData = await this.__inMemoryExpensePrisma.getById(id)

        if (!expenseData) {
            throw new Error("Essa dispensa nao existe")
        }

        return { data: expenseData }
    }

    async create(data: Expense): Promise<{ data: Expense }> {
        const expenseData = await this.__inMemoryExpensePrisma.create(data)
        return { data: expenseData }
    }

    async update(id: string, data: Expense): Promise<{ id: string, data: Expense }> {
        const expenseData = await this.__inMemoryExpensePrisma.update(id, data)
        return { id, data: expenseData }
    }

    async delete(id: string): Promise<{ id: string }> {
        await this.__inMemoryExpensePrisma.delete(id)
        return { id }
    }
}
export default ExpenseService
