import { prisma } from "../../../lib/prisma";
import { Category } from "../../models/Category";

class CategoryPrismaRepositories {

    async getAll(): Promise<Category[]> {
        const category = await prisma.category.findMany({
            include: {
                salary: true,
                expenses: true,
            }
        })
        return category
    }

    async getById(id: string): Promise<Category | null> {
        const category = await prisma.category.findUnique({
            where: { id },
            include: {
                salary: true,
                expenses: true,
            }
        })
        return category
    }

    async create(data: {
        name: string;
        percentage: number;
        shouldSpend: number;
        amountSpent: number;
        utilized: number;
        goal?: string | null;
        salaryId: string;
    }) {
        const category = await prisma.category.create({
            data,
            include: {
                salary: true,
                expenses: true,
            }
        });

        return category;
    }

    async update(id: string, data: Partial<Category>) {
        const {id: _ignoreId, createdAt, salaryId, expenses, ...safaData} = data

        const category = await prisma.category.update(
            {
                where: { id },
                data: safaData,
                include: {
                    salary: true,
                    expenses: true,
                }
            }
        )
        return category
    }

    async delete(id: string) {
        const category = await prisma.category.delete(
            {
                where: { id },
                include: {
                    salary: true,
                    expenses: true,
                }
            }
        )
        return category
    }
}
export default CategoryPrismaRepositories
