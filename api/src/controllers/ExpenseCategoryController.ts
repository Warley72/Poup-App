import { Request, Response } from "express";

import CategoryService from "../services/ExpenseCategoryService"
import ExpenseCategoryService from "../repositories/prisma/ExpenseCategoryPrismaRepositories";

const expensecategoryService = new CategoryService(new ExpenseCategoryService())

class ExpenseCategoryController {

    async getAll(Req: Request, Res: Response) {
        try {
            const dataCategory = await expensecategoryService.getAll()
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

            const dataCategory = await expensecategoryService.getById(id)
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async create(Req: Request, Res: Response) {
        try {

            const data = Req.body

            const dataCategory = await expensecategoryService.create(data)
            Res.json(dataCategory)

        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async update(Req: Request, Res: Response) {
        try {

            const id = Req.params.id
            const data = Req.body

            const dataCategory = await expensecategoryService.update(id, data)
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

            const id = Req.params.id

            const dataCategory = await expensecategoryService.delete(id)
            Res.json(dataCategory)
        } catch (err: any) {
            Res.status(400).json({ error: err.message })
        }
    }

}
export default ExpenseCategoryController;
