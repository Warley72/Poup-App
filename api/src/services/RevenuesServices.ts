import RevenuePrismaRepositories from "../repositories/prisma/RevenuesPrismaRepositories"

import { Revenue } from "../models/Revenue"

import { RevenueCreateDto } from "../DTOs/revenue/RevenueCreateDto"
import { UpdateRevenueDto } from "../DTOs/revenue/UpdateRevenueDto"
import { RevenueResponseDTO } from "../DTOs/revenue/RevenueResponseDto"

class RevenuesServices {

    constructor(private _RevenueRepository: RevenuePrismaRepositories) { }

    async getAll(): Promise<{ data: Revenue[] }> {

        const revenueData = await this._RevenueRepository.getAll()

        return { data: revenueData }
    }

    async getById(id: string): Promise<{ data: Revenue }> {

        const revenueData = await this._RevenueRepository.getById(id)

        if (!revenueData) {
            throw new Error("nao existe salario")
        }

        return { data: revenueData }
    }

    async getByIdWithDetails(id: string): Promise<{ data: RevenueResponseDTO }> {

        const revenue = await this._RevenueRepository.getByIdWithCategories(id)

        if (!revenue) {
            throw new Error("Receita não encontrada")
        }

        const total = revenue.categories.reduce(
            (sum, category) => sum + category.amount,
            0
        )

        return {
            data: {
                id: revenue.id,
                month: revenue.month,
                year: revenue.year,
                total,
                categories: revenue.categories.map(cat => ({
                    name: cat.name,
                    amount: cat.amount
                }))
            }
        }
    }

    async getByIdWithTotal(id: string): Promise<{ data: RevenueResponseDTO }> {

        const revenue = await this._RevenueRepository.getByIdWithCategories(id)

        if (!revenue) {
            throw new Error("Receita não encontrada")
        }

        const total = revenue.categories.reduce(
            (sum, category) => sum + category.amount,
            0
        )

        const response: RevenueResponseDTO = {
            id: revenue.id,
            month: revenue.month,
            year: revenue.year,
            total,
            categories: revenue.categories.map(cat => ({
                name: cat.name,
                amount: cat.amount
            }))
        }

        return { data: response }
    }

    async create(userId: number, data: RevenueCreateDto): Promise<{ data: Revenue }> {

        const revenueData = await this._RevenueRepository.create({
            userId,
            month: data.month,
            year: data.year,
            categories: data.categories
        })

        return { data: revenueData }
    }

    async update(id: string, data: UpdateRevenueDto): Promise<{ id: string, data: Revenue }> {

        const revenueData = await this._RevenueRepository.update(id, data)

        return { id, data: revenueData }
    }

    async delete(id: string): Promise<{ id: string }> {

        await this._RevenueRepository.delete(id)

        return { id }
    }
}
export default RevenuesServices
