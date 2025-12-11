import { prisma } from "../../../lib/prisma";
import { Expense } from "../../models/Expense"

class ExpensePrismaRepositories {

    async getAll(): Promise<Expense[]> {
        const expense = await prisma.expense.findMany(
            {
                include: {
                    user: true,
                    salary: true,
                    category: true,
                }
            })
        return expense
    }

    async getById(id: string): Promise<Expense | null> {
        const expense = await prisma.expense.findUnique(
            {
                where: { id },
                include: {
                    user: true,
                    salary: true,
                    category: true,
                }
            })
        return expense
    }

    async create(data:
        { name: string; amount: number; userId: number; salaryId: string; categoryId: string; }) {
        const expense = await prisma.expense.create(
            {
                data,
                include: {
                    user: true,
                    salary: true,
                    category: true,
                }
            })
        return expense
    }

    async update(id: string, data: Partial<Expense>): Promise<Expense> {
        const { id: _ignoreId, createdAt, ...safeData } = data

        const expense = await prisma.expense.update(
            {
                where: { id },
                data: safeData,
                include: {
                    user: true,
                    salary: true,
                    category: true,
                }
            })
        return expense
    }

    async delete(id: string): Promise<Expense> {
        const expense = await prisma.expense.delete(
            {
                where: { id },
                include: {
                    user: true,
                    salary: true,
                    category: true,
                }
            }
        )
        return expense
    }
}

export default ExpensePrismaRepositories;
