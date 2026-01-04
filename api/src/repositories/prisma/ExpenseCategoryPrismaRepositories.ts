import { prisma } from "../../../lib/prisma";
import { ExpenseCategory } from "../../models/ExpenseCategory";

class ExpenseCategoryPrismaRepositories {

    async getAll(): Promise<ExpenseCategory[]> {

        const categories = await prisma.expenseCategory.findMany()

        return categories.map(category => (
            {
                id: category.id,
                name: category.name,
                percentage: category.percentage,
                shouldSpend: category.shouldSpend,
                goal: category.goal ?? "",
                createdAt: category.createdAt
            }
        ))
    }

    async getById(id: string): Promise<ExpenseCategory | null> {

        const category = await prisma.expenseCategory.findUnique({ where: { id } })

        if (!category) return null

        return {
            id: category.id,
            name: category.name,
            percentage: category.percentage,
            shouldSpend: category.shouldSpend,
            goal: category.goal ?? "",
            createdAt: category.createdAt
        }
    }

    async create(data: { name: string, percentage: number, shouldSpend: number, goal: string, userId: number}): Promise<ExpenseCategory> {

        const category = await prisma.expenseCategory.create({
            data: {
                name: data.name,
                percentage: data.percentage,
                shouldSpend: data.shouldSpend,
                goal: data.goal,
                userId: data.userId
            }
        })

        return {
            id: category.id,
            name: category.name,
            percentage: category.percentage,
            shouldSpend: category.shouldSpend,
            goal: category.goal,
            createdAt: category.createdAt
        }
    }

    async update(id: string, data: {name?: string, percentage?: number, shouldSpend?: number, goal?: string } ): Promise<ExpenseCategory> {

        const category = await prisma.expenseCategory.update({ where: { id }, data })

        return {
            id: category.id,
            name: category.name,
            percentage: category.percentage,
            shouldSpend: category.shouldSpend,
            goal: category.goal,
            createdAt: category.createdAt
        }
    }

    async delete(id: string): Promise<void> {
        
        await prisma.expenseCategory.delete({ where: { id } })
    }
}
export default ExpenseCategoryPrismaRepositories
