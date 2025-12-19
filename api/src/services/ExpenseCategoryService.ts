import CategoryPrismaRepositories from "../repositories/prisma/ExpenseCategoryPrismaRepositories"

import { ExpenseCategory } from "../models/ExpenseCategory"

class ExpenseCategoryService {

    constructor(private _inMemoryCategoryPrisma: CategoryPrismaRepositories) { }

    async getAll(): Promise<{ data: ExpenseCategory[] }> {
        const categoryData = await this._inMemoryCategoryPrisma.getAll()
        return { data: categoryData }
    }

    async getById(id: string): Promise<{ data: ExpenseCategory }> {
        const categoryData = await this._inMemoryCategoryPrisma.getById(id)

        if (!categoryData) {
            throw Error("Essa categoria nao existe")
        }

        return { data: categoryData }
    }

    async create(data: ExpenseCategory): Promise<{ data: ExpenseCategory }> {
        const categoryData = await this._inMemoryCategoryPrisma.create(data)
        return { data: categoryData }
    }

    async update(id: string, data: ExpenseCategory): Promise<{ id: string, data: ExpenseCategory }> {
        const categoryData = await this._inMemoryCategoryPrisma.update(id, data)
        return { id, data: categoryData }
    }

    async delete(id: string): Promise<{id: string}> {
        await this._inMemoryCategoryPrisma.delete(id)
        return { id }
    }
}
export default ExpenseCategoryService;
