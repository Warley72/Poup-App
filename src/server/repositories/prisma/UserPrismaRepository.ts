import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

class UserPrismaRepository {

    async create() {
        const newUser = await prisma.user.create({
            data:{
                name: "carlosLindao",
                email: "carlosteste01@gmail.com"
            }
        })
        console.log(newUser)
        return newUser
    }
}
const usuarioPrismaRepository = new UserPrismaRepository()
usuarioPrismaRepository.create()
export default UserPrismaRepository;
