import { RevenueCategory } from "../models/RevenueCategory"

export interface Revenues {
    id: string
    total: number
    month: number
    year: number
    createdAt: Date

    userId: number
    categories: RevenueCategory[]
}
