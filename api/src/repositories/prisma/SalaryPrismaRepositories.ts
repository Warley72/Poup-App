import { prisma } from "../../../lib/prisma"
import { Salary } from "../../models/Salary"


class SalaryPrismaRepositories {

    async getAll(): Promise<Salary[]> {
        const salary = await prisma.salary.findMany(
            {
                include: {
                    user: true,
                    Expense: true,
                    Category: true,
                }
            })
        return salary
    }

    async getById(id: string): Promise<Salary | null> {
        const salary = await prisma.salary.findUnique(
            {
                where: { id },
                include: {
                    user: true,
                    Expense: true,
                    Category: true,
                }
            })
        return salary
    }

    async create(data:
        { userId: number, id: string, amount: number }): Promise<Salary> {
        const salary = await prisma.salary.create(
            {
                data,
                include: {
                    user: true,
                    Expense: true,
                    Category: true,
                }
            })
        return salary
    }

    async update(id: string, data: Partial<Salary>): Promise<Salary> {
        const { id: _ignoreId, createdAt, Expense, Category, ...safeData } = data

        const salary = await prisma.salary.update(
            {
                where: { id },
                data: safeData,
                include: {
                    user: true,
                    Expense: true,
                    Category: true,
                }
            })
        return salary
    }

    async delete(id: string): Promise<Salary> {
        const salary = await prisma.salary.delete(
            {
                where: { id },
                include: {
                    user: true,
                    Expense: true,
                    Category: true,
                }
            })
        return salary
    }

}
export default SalaryPrismaRepositories
