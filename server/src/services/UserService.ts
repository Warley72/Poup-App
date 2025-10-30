import UserPrismaInMemory from "../repositories/in-memory/UserPrismaInMemory";
import UserPrismaRepositories from "../repositories/prisma/UserPrismaRepositories";

class UserService {
    constructor (private _inMemoryUserPrisma: UserPrismaInMemory | UserPrismaRepositories) {}

    async getAll() {
        return await this._inMemoryUserPrisma.getAll();
    }
}
export default UserService;
