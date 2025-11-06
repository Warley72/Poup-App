import { Expense } from "../../models/Expense";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

class ExpensePrismaRepositories {
    async getAll(): Promise<Expense[]> {
        const getExpense = await prisma.expense.findMany();
        return getExpense;
    }

    async getByiD(id: string): Promise<Expense | null> {
        const getByIdExpense = await prisma.expense.findFirst({
            where: { id },
        });
        return getByIdExpense;
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
                id: "2"
            }
        })
        return deleteExpense
    }
}
export default ExpensePrismaRepositories;
