import { User } from "../../models/User";
import UserPrismaRepositories from "../prisma/UserPrismaRepositories";

class UserPrismaInMemory implements UserPrismaRepositories {
    private user: User[] = [];

    constructor() {
        this.user = [
            {
                id: 1,
                name: "Zezim",
                password: "12345",
            },
            {
                id: 12,
                name: "caralho",
                password: "12345",
            },
        ];
    }

    async getAll(): Promise<User[]> {
        return this.user;
    }

    async getById(id: number): Promise<User | null> {
        const DataUser = this.user.find((item) => item.id === id);

        if (!DataUser) {
            return null;
        }

        return DataUser;
    }

    async create(data: User): Promise<User> {
        this.user.push(data);
        return data;
    }

    async update(id: number, data: User): Promise<User> {
        const index = this.user.findIndex((item) => item.id === id);
        this.user[index] = data;
        return data;
    }

    async delete(id: number): Promise<number> {
        const index = this.user.findIndex((item) => item.id === id);
        delete this.user[index];
        return id;
    }
}
export default UserPrismaInMemory;
