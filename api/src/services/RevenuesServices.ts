import SalaryPrismaRepositories from "../repositories/prisma/RevenuesPrismaRepositories"

import { Revenues } from "../models/Revenue"

class RevenuesServices {

    constructor(private _inMemorySalaryPrisma: SalaryPrismaRepositories) { }

    async getAll(): Promise<{ data: Revenues[] }> {
        const salaryData = await this._inMemorySalaryPrisma.getAll()
        return { data: salaryData }
    }

    async getById(id: string): Promise<{ data: Revenues }> {
        const salaryData = await this._inMemorySalaryPrisma.getById(id)

        if (!salaryData) {
            throw new Error("nao existe salario")
        }

        return { data: salaryData }
    }

    async create(data: Revenues): Promise<{ data: Revenues }> {
        const salaryData = await this._inMemorySalaryPrisma.create(data)
        return { data: salaryData }
    }

    async update(id: string, data: Revenues): Promise<{ id: string, data: Revenues }> {
        const salaryData = await this._inMemorySalaryPrisma.update(id, data)
        return { id, data: salaryData }
    }

    async delete(id: string): Promise<{ id: string }> {
        await this._inMemorySalaryPrisma.delete(id)
        return { id }
    }
}
export default RevenuesServices
