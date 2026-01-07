import { prisma } from "../../../lib/prisma"
import { Revenue } from "../../models/Revenue"

class RevenuePrismaRepositories {

    async getAll(): Promise<Revenue[]> {

        const revenues = await prisma.revenue.findMany()

        return revenues.map(revenue => (
            {
                id: revenue.id,
                month: revenue.month,
                year: revenue.year,
                createdAt: revenue.createdAt
            }
        ))
    }

    async getById(id: string): Promise<Revenue | null> {

        const revenue = await prisma.revenue.findUnique({ where: { id } })

        if (!revenue) return null

        return {
            id: revenue.id,
            month: revenue.month,
            year: revenue.year,
            createdAt: revenue.createdAt
        }
    }

    async getByIdWithCategories(id: string) {

        return prisma.revenue.findUnique({
            where: { id },
            include: {
                categories: true
            }
        })
    }

    async create(
        data: { userId: number, month: number, year: number,
            categories: { name: string, amount: number }[] }) {

        const revenue = await prisma.revenue.create({
            data: {
                userId: data.userId,
                month: data.month,
                year: data.year,
                categories: {
                    create: data.categories
                }
            }
        })

        return {
            id: revenue.id,
            month: revenue.month,
            year: revenue.year,
            createdAt: revenue.createdAt
        }
    }

    async update(id: string, data: { month?: number, year?: number }): Promise<Revenue> {

        const revenue = await prisma.revenue.update({ where: { id }, data })

        return {
            id: revenue.id,
            month: revenue.month,
            year: revenue.year,
            createdAt: revenue.createdAt
        }
    }

    async delete(id: string): Promise<void> {

        await prisma.revenue.delete({ where: { id } })
    }

}
export default RevenuePrismaRepositories
