import { prisma } from "../../../lib/prisma"
import { User } from "../../models/User"

class UserPrismaRepositories {

    async getAll(): Promise<User[]> {

        return prisma.user.findMany({
            include: {
                revenues: {
                    include: {
                        categories: true
                    }
                },
                expenses: {
                    include: {
                        category: true
                    }
                }
            }
        })
    }

    async getById(id: number): Promise<User | null> {

        return prisma.user.findUnique({
            where: { id },
            include: {
                revenues: {
                    include: {
                        categories: true
                    }
                },
                expenses: {
                    include: {
                        category: true
                    }
                }
            }
        })
    }

    async create(data: Omit<User, "id" | "createdAt" | "Salary" | "Expense">): Promise<User> {

        return prisma.user.create({
            data: {
                name: data.name,
                password: data.password
            },
            include: {
                revenues: {
                    include: {
                        categories: true
                    }
                },
                expenses: {
                    include: {
                        category: true
                    }
                }
            }
        })
    }

    async update(id: number, data: Partial<User>): Promise<User> {

        const { id: _id, createdAt, revenues, expenses, ...safeData } = data;

        return prisma.user.update({
            where: { id },
            data: safeData,
            include: {
                revenues: {
                    include: {
                        categories: true
                    }
                },
                expenses: {
                    include: {
                        category: true
                    }
                }
            }
        })
    }

    async delete(id: number): Promise<User> {

        return prisma.user.delete({
            where: { id },
            include: {
                revenues: {
                    include: {
                        categories: true
                    }
                },
                expenses: {
                    include: {
                        category: true
                    }
                }
            }
        })
    }

}

export default UserPrismaRepositories
