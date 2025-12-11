import { Request, Response } from "express";

import CategoryService from "../services/CategoryService"
import CategoryPrismaRepositories from "../repositories/prisma/CategoryPrismaRepositories";

const categoryService = new CategoryService(new CategoryPrismaRepositories())

class CategoryController {

    async getAll(Req: Request, Res: Response) {
        try {
            const dataCategory = await categoryService.getAll()
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async getById(Req: Request, Res: Response) {
        try {

            const { id } = Req.params;

            if(!Req.params.id) {
                throw new Error("o id é obrigatorio")
            }

            const dataCategory = await categoryService.getById(id)
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async create(Req: Request, Res: Response) {
        try {

            const data = Req.body

            const dataCategory = await categoryService.create(data)
            Res.json(dataCategory)

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async update(Req: Request, Res: Response) {
        try {

            const id = Req.params.id
            const data = Req.body

            const dataCategory = await categoryService.update(id, data)
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

            const id = Req.params.id

            const dataCategory = await categoryService.delete(id)
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

}
export default CategoryController;
