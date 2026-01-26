import { prisma } from "../../../lib/prisma"

import { User } from "../../models/User"
import { UserWithRelationsDTO } from "../../DTOs/user/UserWithRelations"
import { RevenueWithCategoriesDTO } from "../../DTOs/revenue/RevenueWithCategoriesDTO"

class UserPrismaRepositories {

    async getAll(): Promise<User[]> {

        const users = await prisma.user.findMany()

        return users.map(user => (
            {
                id: user.id,
                name: user.name,
                createdAt: user.createdAt
            }
        ))
    }

    async getById(id: number): Promise<User | null> {

        const user = await prisma.user.findUnique({ where: { id } })

        if (!user) return null

        return {
            id: user.id,
            name: user.name,
            createdAt: user.createdAt
        }
    }

    async getByIdWithRelations(id: number) {

        return prisma.user.findUnique({
            where: { id },
            include: {
                revenues: {
                    include: {
                        categories: true
                    }
                },
                expenses: true,
                categories: true
            }
        })
    }

    async getByIdWithCategories(id: string): Promise<RevenueWithCategoriesDTO | null> {

        return prisma.revenue.findUnique({
            where: { id },
            include: {
                categories: true
            }
        })
    }

    async create(data: { name: string, password: string }): Promise<User> {

        const user = await prisma.user.create({ data: { name: data.name, password: data.password } })

        return {
            id: user.id,
            name: user.name,
            createdAt: user.createdAt
        }

    }

    async update(id: number, data: { name?: string; password?: string }): Promise<User> {

        const user = await prisma.user.update({ where: { id }, data })

        return {
            id: user.id,
            name: user.name,
            createdAt: user.createdAt
        }
    }

    async delete(id: number): Promise<void> {

        await prisma.user.delete({ where: { id } })

    }

}
export default UserPrismaRepositories
