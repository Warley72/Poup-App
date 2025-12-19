import { prisma } from "../../../lib/prisma"
import { Revenues } from "../../models/Revenues"


class RevenuesPrismaRepositories {

    async getAll(): Promise<Revenues[]> {

        return prisma.revenues.findMany({
            include: {
                categories: true
            }
        })
    }

    async getById(id: string): Promise<Revenues | null> {

        return prisma.revenues.findUnique({
            where: { id },
            include: {
                categories: true
            }
        })
    }

    async create(data:
        { userId: number, id: string, total: number, month: number, year: number }): Promise<Revenues> {

        return prisma.revenues.create({
            data,
            include: {
                categories: true
            }
        })
    }

    async update(id: string, data: Partial<Revenues>) {
        const { id: _ignoreId, createdAt, categories, ...safeData } = data

        return prisma.revenues.update({
            where: { id },
            data: safeData,
            include: {
                categories: true
            }
        })
    }

    async delete(id: string): Promise<Revenues> {
        return prisma.revenues.delete({
            where: { id},
            include: {
                categories: true
            }
        })
    }

}
export default RevenuesPrismaRepositories
