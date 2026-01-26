import UserPrismaRepositories from "../repositories/prisma/UserPrismaRepositories";

import { User } from "../models/User"

import { CreateUserDTO } from "../DTOs/user/CreateUser"
import { UserWithRelationsDTO } from "../DTOs/user/UserWithRelations";

class UserService {

    constructor(private _userRepository: UserPrismaRepositories) { }

    async getAll(): Promise<{ data: User[] }> {

        const userData = await this._userRepository.getAll();

        return { data: userData };
    }

    async getById(id: number): Promise<{ data: User }> {

        const userData = await this._userRepository.getById(id)

        if (!userData) { throw new Error("Esse usuario nao existe") }

        return { data: userData }
    }

    async getByIdWithRelations(id: number): Promise<{ data: UserWithRelationsDTO }> {
        
        const user = await this._userRepository.getByIdWithRelations(id)

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        const total = user.revenues.reduce((acc, revenue) => {
            const revenueTotal = revenue.categories.reduce(
                (sum, category) => sum + category.amount,
                0
            )
            return acc + revenueTotal
        }, 0)

        return {
            data: {
                id: user.id,
                name: user.name,
                total,
                createdAt: user.createdAt,

                revenues: user.revenues.map(revenue => ({
                    id: revenue.id,
                    month: revenue.month,
                    year: revenue.year,
                    createdAt: revenue.createdAt,
                    categories: revenue.categories.map(cat => ({
                        name: cat.name,
                        amount: cat.amount
                    }))
                })),
                expenses: user.expenses,
                categories: user.categories
            }
        }
    }

    async create(data: CreateUserDTO): Promise<{ data: User }> {

        const userCreate = await this._userRepository.create(data);

        return { data: userCreate };
    }

    async update(id: number, data: User): Promise<{ id: number; data: { name?: string; password?: string } }> {

        const userUpdate = await this._userRepository.update(id, data);

        return { id, data: userUpdate };
    }

    async delete(id: number): Promise<{ id: number }> {

        await this._userRepository.delete(id);

        return { id };
    }
}

export default UserService
