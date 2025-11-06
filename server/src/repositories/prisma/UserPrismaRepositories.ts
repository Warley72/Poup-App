import { User } from "../../models/User";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

class UserPrismaRepositories {

    async getAll(): Promise<User[]> {
        const getUser = await prisma.user.findMany();
        return getUser;
    }

    async getById(id: number): Promise<User | null> {
        const getByIdUser = await prisma.user.findFirst({
            where: { id },
        });
        console.log(getByIdUser)
        return getByIdUser;
    }

    async create(data: User): Promise<User> {
        const newUser = await prisma.user.create({ data });
        return newUser;
    }

    async update(id: number, data: User): Promise<User> {
        const updateUser = await prisma.user.update({
            data: {
                name: "Wellen",
            },
            where: {
                id: 1,
            },
        });
        console.log(updateUser);
        return updateUser;
    }

    async delete(id: number): Promise<number> {
        const deleteUser: any = await prisma.user.delete({
            where: {
                id: 3,
            },
        });
        console.log(deleteUser);
        return 3;
    }
}
const userPrismaRepositories = new UserPrismaRepositories();
userPrismaRepositories.getAll();

export default UserPrismaRepositories;
