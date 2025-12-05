import UserPrismaRepositories from "../repositories/prisma/UserPrismaRepositories";

import { User } from "../models/User"

class UserService {

    constructor(private _inMemoryUserPrisma: UserPrismaRepositories) { }

    async getAll(): Promise<{ data: User[] }> {
        const userData = await this._inMemoryUserPrisma.getAll();
        return { data: userData };
    }

    async getById(id: number): Promise<{ data: User }> {
        const userData = await this._inMemoryUserPrisma.getById(id)

        if (!userData) {
            throw new Error("Esse usuario nao existe")
        }

        return { data: userData }
    }

    async create(data: User): Promise<{ data: User }> {
        const userCreate = await this._inMemoryUserPrisma.create(data);
        return { data: userCreate };
    }

    async update(id: number, data: User): Promise<{ id: number; data: User }> {
        const userUpdate = await this._inMemoryUserPrisma.update(id, data);
        return { id, data: userUpdate };
    }

    async delete(id: number): Promise<{ id: number }> {
        await this._inMemoryUserPrisma.delete(id);
        return { id };
    }
}

export default UserService
