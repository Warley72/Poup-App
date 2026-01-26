import { Expense } from "../../models/Expense"
import { ExpenseCategory } from "../../models/ExpenseCategory"
import { RevenueWithCategoriesDTO } from "../revenue/RevenueWithCategoriesDTO"

export interface UserWithRelationsDTO {
    id: number
    name: string
    createdAt: Date
    total: number

    revenues: {
        id: string
        month: number
        year: number
        createdAt: Date
        categories: {
            name: string
            amount: number
        }[]
    }[]

    expenses: Expense[]
    categories: ExpenseCategory[]
}
