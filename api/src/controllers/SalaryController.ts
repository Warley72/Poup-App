import { Request, Response } from "express"

import SalaryServices from "../services/SalaryServices"
import SalaryPrismaRepositories from "../repositories/prisma/SalaryPrismaRepositories"

const salaryService = new SalaryServices(new SalaryPrismaRepositories())

class SalaryController {

    async getAll(Req: Request, Res: Response) {
        try {
            const dataSalary = await salaryService.getAll()
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

            const dataSalary = await salaryService.getById(id)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async create(Req: Request, Res: Response) {
        try {

            const data = Req.body

            const dataSalary = await salaryService.create(data)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async update(Req: Request, Res: Response) {
        try {

            const id = Req.params.id
            const data=  Req.body

            const dataSalary = await salaryService.update(id, data)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

            const id = Req.params.id

            const dataSalary = await salaryService.delete(id)
            Res.json(dataSalary)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}
export default SalaryController
