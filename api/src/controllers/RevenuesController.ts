import { Request, Response } from "express"

import RevenuesServices from "../services/RevenuesServices"
import RevenuesPrismaRepositories from "../repositories/prisma/RevenuesPrismaRepositories"

const revenuesServices = new RevenuesServices(new RevenuesPrismaRepositories())

class RevenuesController {

    async getAll(req: Request, res: Response) {
        try {

            const data = await revenuesServices.getAll()

            return res.json(data)

        } catch (err: any) {
            return res.status(400).json({ error: err.message })
        }
    }

    async getById(req: Request, res: Response) {
        try {

            const { id } = req.params

            if (!id) {
                return res.status(400).json({ error: "Id é obrigatório" })
            }

            const data = await revenuesServices.getById(id)

            return res.json(data)
        } catch (err: any) {
            return res.status(400).json({ error: err.message })
        }
    }

    async getByIdWithDetails(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = await revenuesServices.getByIdWithDetails(id)
            res.json({ data })
        } catch (err: any) {
            res.status(400).json({ error: err.message })
        }
    }

    async create(req: Request, res: Response) {
        try {

            const userId = Number(req.params.userId)

            if (isNaN(userId)) {
                return res.status(400).json({ error: "userId inválido" })
            }

            const data = req.body

            const revenue = await revenuesServices.create(userId, data)

            return res.status(201).json(revenue)

        } catch (err: any) {
            return res.status(400).json({ error: err.message })
        }
    }

    async update(req: Request, res: Response) {
        try {

            const { id } = req.params
            const data = req.body

            const revenue = await revenuesServices.update(id, data)

            return res.json(revenue)

        } catch (err: any) {
            return res.status(400).json({ error: err.message })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params

            await revenuesServices.delete(id)

            return res.status(204).send()

        } catch (err: any) {
            return res.status(400).json({ error: err.message })
        }
    }
}
export default RevenuesController
