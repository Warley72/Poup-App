import { Request, Response } from "express";

import UserService from "../services/UserService";
import UserPrismaInMemory from "../repositories/in-memory/UserPrismaInMemory";
import UserPrismaRepositories from "../repositories/prisma/UserPrismaRepositories";

const userService = new UserService(new UserPrismaRepositories());

class UserController {

    async getAll(Req: Request, Res: Response) {
        try {
            const userData = await userService.getAll();
            Res.json(userData);
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async getById(Req: Request, Res: Response) {
        try {
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async create(Req: Request, Res: Response) {
        try {
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async update(Req: Request, Res: Response) {
        try {
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async delete(Req: Request, Res: Response) {
        try {
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}
export default UserController;
