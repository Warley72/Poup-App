import { prisma } from "../../../lib/prisma";
import { Expense } from "../../models/Expense"

class ExpensePrismaRepositories {

    async getAll(): Promise<Expense[]> {

        return prisma.expense.findMany({
            include: {
                user: true
            }
        })
    }

    async getById(id: string): Promise<Expense | null> {

        return prisma.expense.findUnique({
            where: { id },
            include: {
                user: true
            }
        })
    }

    async create(data: { name: string, amount: number, userId: number, categoryId: string }): Promise<Expense> {

        return prisma.expense.create({
            data: {
                name: data.name,
                amount: data.amount,
                userId: data.userId,
                categoryId: data.categoryId
            }
        })
    }

    async update(id: string, data: Partial<Expense>): Promise<Expense> {
        const { id: _ignoreId, createdAt, categoryId, ...safeData } = data

        return prisma.expense.update({
            where: { id },
            data: safeData,
            include: {
                user: true
            }
        })
    }

    async delete(id: string): Promise<Expense> {

        return prisma.expense.delete({
            where: { id },
            include: {
                user: true
            }
        })
    }
}

export default ExpensePrismaRepositories;
