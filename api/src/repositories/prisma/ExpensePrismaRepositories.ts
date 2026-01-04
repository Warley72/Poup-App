import { prisma } from "../../../lib/prisma";
import { Expense } from "../../models/Expense"

class ExpensePrismaRepositories {

    async getAll(): Promise<Expense[]> {

        const expenses = await prisma.expense.findMany()

        return expenses.map(expense => (
            {
                id: expense.id,
                name: expense.name,
                amount: expense.amount,
                date: expense.date
            }
        ))
    }

    async getById(id: string): Promise<Expense | null> {

        const expense = await prisma.expense.findUnique({ where: { id } })

        if (!expense) return null

        return {
            id: expense.id,
            name: expense.name,
            amount: expense.amount,
            date: expense.date
        }
    }

    async create(data:
        {name: string, amount: number, date: Date, userId: number, categoryId: string}): Promise<Expense> {

        const expense = await prisma.expense.create({
            data: {
                name: data.name,
                amount: data.amount,
                date: data.date,
                userId: data.userId,
                categoryId: data.categoryId
            }
        })

        return {
            id: expense.id,
            name: expense.name,
            amount: expense.amount,
            date: expense.date
        }
    }

    async update(id: string,data: {name?: string, amount?: number}): Promise<Expense> {

        const expense = await prisma.expense.update({ where: { id }, data })

        return {
            id: expense.id,
            name: expense.name,
            amount: expense.amount,
            date: expense.date
        }
    }

    async delete(id: string): Promise<void> {

        await prisma.expense.delete({ where: { id } })
    }
}

export default ExpensePrismaRepositories;
