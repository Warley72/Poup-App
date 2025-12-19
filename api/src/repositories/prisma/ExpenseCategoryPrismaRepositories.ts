import { prisma } from "../../../lib/prisma";
import { ExpenseCategory } from "../../models/ExpenseCategory";

class ExpenseCategoryPrismaRepositories {

    async getAll(): Promise<ExpenseCategory[]> {

        return prisma.expenseCategory.findMany({
            include: {
                expenses: true
            }
        })
    }

    async getById(id: string): Promise<ExpenseCategory | null> {

        return prisma.expenseCategory.findUnique({
            where: { id },
            include: {
                expenses: true
            }
        })
    }

    async create(data: {
        name: string;
        percentage: number;
        shouldSpend: number;
        amountSpent: number;
        utilized: number;
        goal?: string | null;
    }): Promise<ExpenseCategory> {

        return prisma.expenseCategory.create({
            data,
            include: {
                expenses: true
            }
        })
    }

    async update(id: string, data: Partial<ExpenseCategory>) {
        const { id: _ignoreId, createdAt, expenses, ...safaData } = data

        return prisma.expenseCategory.update(({
            where: { id },
            data: safaData,
            include: {
                expenses: true
            }
        }))
    }

    async delete(id: string): Promise<ExpenseCategory> {
        return prisma.expenseCategory.delete({
            where: { id },
            include: {
                expenses: true
            }
        })
    }
}
export default ExpenseCategoryPrismaRepositories
