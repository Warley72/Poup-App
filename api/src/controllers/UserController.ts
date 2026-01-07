import { Request, Response } from "express"

import UserService from "../services/UserService"
import UserPrismaRepositories from "../repositories/prisma/UserPrismaRepositories"

const userService = new UserService(new UserPrismaRepositories())


class UserController {

    async getAll(Req: Request, Res: Response) {
        try {

            const userData = await userService.getAll(); Res.json(userData);

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async getById(Req: Request, Res: Response) {
        try {

            if (!Req.params.id) {

                throw new Error("O id é obrigatório!");
            }

            const id = Number(Req.params.id);

            const userData = await userService.getById(id); Res.json(userData);

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }

    }

    async getByIdWithRelations(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)

            if (isNaN(id)) {
                return res.status(400).json({ error: "ID inválido" })
            }

            const result = await userService.getByIdWithRelations(id)
            return res.json(result)

        } catch (err: any) {
            return res.status(404).json({ error: err.message })
        }
    }

    async create(Req: Request, Res: Response) {
        try {

            const data = Req.body;

            const userCreate = await userService.create(data); Res.json(userCreate)

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async update(Req: Request, Res: Response) {
        try {

            const id = Number(Req.params.id)
            const data = Req.body;

            const userUpdate = await userService.update(id, data); Res.json(userUpdate)

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

            const id = Number(Req.params.id)
            const userDelete = await userService.delete(id); Res.json(userDelete)

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}

export default UserController;
