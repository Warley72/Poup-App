import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

class UserPrismaRepositories {

    async getAll() {
        const getUser = await prisma.user.findMany();
        console.log(getUser);
        return getUser;
    }

    async create() {
        const newUser = await prisma.user.create({
            data: {
                name: "coconildo",
                password: "coconildo123",
            },
        });
        console.log(newUser);
        return newUser;
    }

    async getById() {
        const getByIdUser = await prisma.user.findFirst({
            where: {
                id: 3
            }
        })
        console.log(getByIdUser)
        return getByIdUser
    }

    async update() {
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

    async delete() {
        const deleteUser = await prisma.user.delete({
            where:{
                id: 3
            }
        })
        console.log(deleteUser)
        return deleteUser
    }
}

const userPrismaRepositories = new UserPrismaRepositories();

userPrismaRepositories.delete();
