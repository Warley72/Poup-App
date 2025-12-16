import { Expense } from "../models/Expense"
import { Revenues } from "../models/Revenues"

export interface User {
    id: number
    name: string
    password: string
    createdAt: Date

    revenues: Revenues[]
    expenses: Expense[]
}
