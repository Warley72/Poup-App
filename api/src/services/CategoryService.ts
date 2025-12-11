import CategoryPrismaRepositories from "../repositories/prisma/CategoryPrismaRepositories"

import { Category } from "../models/Category"

class CategoryService {

    constructor(private _inMemoryCategoryPrisma: CategoryPrismaRepositories) { }

    async getAll(): Promise<{ data: Category[] }> {
        const categoryData = await this._inMemoryCategoryPrisma.getAll()
        return { data: categoryData }
    }

    async getById(id: string): Promise<{ data: Category }> {
        const categoryData = await this._inMemoryCategoryPrisma.getById(id)

        if (!categoryData) {
            throw Error("Essa categoria nao existe")
        }

        return { data: categoryData }
    }

    async create(data: Category): Promise<{ data: Category }> {
        const categoryData = await this._inMemoryCategoryPrisma.create(data)
        return { data: categoryData }
    }

    async update(id: string, data: Category): Promise<{ id: string, data: Category }> {
        const categoryData = await this._inMemoryCategoryPrisma.update(id, data)
        return { id, data: categoryData }
    }

    async delete(id: string): Promise<{id: string}> {
        await this._inMemoryCategoryPrisma.delete(id)
        return { id }
    }
}
export default CategoryService;
