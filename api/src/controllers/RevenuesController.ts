import { Request, Response } from "express"

import RevenuesServices from "../services/RevenuesServices"
import RevenuesPrismaRepositories from "../repositories/prisma/RevenuesPrismaRepositories"

const revenuesServices = new RevenuesServices(new RevenuesPrismaRepositories())

class RevenuesController {

    async getAll(Req: Request, Res: Response) {
        try {
            const dataSalary = await revenuesServices.getAll()
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async getById(Req: Request, Res: Response) {
        try {

            const { id } = Req.params;

            if (!Req.params.id) {
                throw new Error("Saldo nao existe")
            }

            const dataSalary = await revenuesServices.getById(id)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async create(Req: Request, Res: Response) {
        try {

            const data = Req.body

            const dataSalary = await revenuesServices.create(data)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async update(Req: Request, Res: Response) {
        try {

            const id = Req.params.id
            const data=  Req.body

            const dataSalary = await revenuesServices.update(id, data)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

            const id = Req.params.id

            const dataSalary = await revenuesServices.delete(id)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}
export default RevenuesController
