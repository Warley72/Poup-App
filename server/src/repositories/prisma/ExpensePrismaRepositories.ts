import { PrismaClient } from "../../generated/prisma";
import { Expense } from "../../models/Expense";

const prisma = new PrismaClient();

class ExpensePrismaRepositories {
    async getAll(): Promise<Expense[]> {
        const expenses = await prisma.expense.findMany({
            include: {
                user: true,
                salary: true,
                category: true,
            },
        });
        return expenses;
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

    async create(data: Omit<Expense, "id" | "createdAt">): Promise<Expense> {
        const expense = await prisma.expense.create({
            data: {
                name: data.name,
                amount: data.amount,
                userId: data.userId,
                salaryId: data.salaryId,
                categoryId: data.categoryId,
            },
            include: {
                user: true,
                salary: true,
                category: true,
            },
        });
        return expense;
    }

    async update(id: string, data: Partial<Expense>) {
        const { id: _id, createdAt, ...safeData } = data;

        const expense = await prisma.expense.update({
            where: { id },
            data: safeData,
            include: {
                user: true,
                salary: true,
                category: true,
            },
        });
        return expense;
    }

    async delete(id: string): Promise<Expense> {
        const expense = await prisma.expense.delete({
            where: { id },
            include: {
                user: true,
                salary: true,
                category: true,
            },
        });
        return expense;
    }
}
export default ExpensePrismaRepositories;
