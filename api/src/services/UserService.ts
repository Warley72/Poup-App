import UserPrismaRepositories from "../repositories/prisma/UserPrismaRepositories";

import { CreateUserDTO } from "../DTOs/user/CreateUserDTO"
import { User } from "../models/User"

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
