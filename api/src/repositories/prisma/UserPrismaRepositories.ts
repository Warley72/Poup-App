import { prisma } from "../../../lib/prisma"
import { User } from "../../models/User"

class UserPrismaRepositories {

    async getAll(): Promise<User[]> {
        const users = await prisma.user.findMany({
            include: {
                Salary: true,
                Expense: true,
            }
        })
        return users
    }

    async getById(id: number): Promise<User | null> {
        const users = await prisma.user.findUnique({
            where: { id },
            include: {
                Salary: true,
                Expense: true
            }
        })
        return users
    }

    async create(data: Omit<User, "id" | "createdAt" | "Salary" | "Expense">): Promise<User> {
        const users = await prisma.user.create({
            data: {
                name: data.name,
                password: data.password
            },
            include: {
                Salary: true,
                Expense: true,
            }
        })
        return users
    }

    async update(id: number, data: Partial<User>): Promise<User> {
        const { id: _id, createdAt, Salary, Expense, ...safeData } = data;

        const user = await prisma.user.update({
            where: { id },
            data: safeData,
            include: {
                Salary: true,
                Expense: true,
            }
        })
        return user
    }

    async delete(id: number): Promise<User> {
        const user = await prisma.user.delete({
            where: {id}
        })
        return user
    }

}

export default UserPrismaRepositories
