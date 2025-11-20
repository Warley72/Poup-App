import { Expense } from "../../models/Expense";

import ExpensePrismaRepositories from "../prisma/ExpensePrismaRepositories";

class ExpensePrismaInMemory implements ExpensePrismaRepositories {
    private expense: Expense[] = [];

    constructor() {
        this.expense = [
            {
                id: "1",
                name: "parcela do carro",
                amount: 1212.21,
                createdAt: new Date("2025-01-01T00:00:00Z"),
                userId: 1,
                salaryId: "1",
                categoryId: "1",
            },
        ];
    }

    async getAll(): Promise<Expense[]> {
        return this.expense;
    }

    async getById(id: string): Promise<Expense | null> {
        const expense = await prisma.expense.findUnique({
            where: { id },
            include: {
                user: true,
                salary: true,
                category: true,
            },
        });
        return expense;
    }

    async create(data: Expense): Promise<Expense> {
        const NewExpense = await prisma.expense.create({ data });
        return NewExpense;
    }

    async update(id: string, data: Expense): Promise<Expense> {
        const updateExpense = await prisma.expense.update({
            data: {
                name: "aluguel do carro caralho",
            },
            where: {
                id: "1",
            },
        });
        return updateExpense;
    }

    async delete(id: string): Promise<string> {
        const deleteExpense: any = await prisma.expense.delete({
            where: {
                id: "2",
            },
        });
        return deleteExpense;
    }
}
export default ExpensePrismaInMemory;
