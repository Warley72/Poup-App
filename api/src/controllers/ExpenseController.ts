import { Request, Response } from "express";

import ExpenseService from "../services/ExpenseService"
import ExpensePrismaRepositories from "../repositories/prisma/ExpensePrismaRepositories"

const expenseService = new ExpenseService(new ExpensePrismaRepositories())

class ExpenseController {

    async getAll(Req: Request, Res: Response) {
        try {
            const dataExpense = await expenseService.getall()
            Res.json(dataExpense)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async getById(Req: Request, Res: Response) {
        try {

            const { id } = Req.params;

            if (!Req.params.id) {
                throw new Error("O id é obrigatório!");
            }

            const dataExpense = await expenseService.getById(id)
            Res.json(dataExpense)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async create(Req: Request, Res: Response) {
        try {
            const data = Req.body
            const expenseCreate = await expenseService.create(data)
            Res.json(expenseCreate)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async update(Req: Request, Res: Response) {
        try {
            const id = Req.params.id
            const data = Req.body

            const expenseUpdate = await expenseService.update(id, data)
            Res.json(expenseUpdate)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async delete(Req: Request, Res: Response) {
        try {
            const id = Req.params.id

            const expenseDelete = await expenseService.delete(id)
            Res.json(expenseDelete)
        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }
}
export default ExpenseController
