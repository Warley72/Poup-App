import { error } from "console";
import { Request, Response } from "express";

class ExpenseController {

    async getAll(Req: Request, Res: Response) {
        try {

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async getById(Req: Request, Res: Response) {
        try {

        } catch (err: any) {
            Res.status(400).json({error: err.message})
        }
    }

    async create(Req: Request, Res: Response) {
        try{

        } catch (err: any) {
            Res.status(400).json({error: err.message})
        }
    }

    async update(Req: Request, Res: Response) {
        try {

        } catch (err: any) {
            Res.status(400).json({error: err.message})
        }
    }

    async delete(Req: Request, Res: Response) {
        try {

        } catch(err: any) {
            Res.status(400).json({error: err.message})
        }
    }
}

export default ExpenseController;
