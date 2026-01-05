import { Revenue } from "../../models/Revenue"
import { Expense } from "../../models/Expense"
import { ExpenseCategory } from "../../models/ExpenseCategory"

export interface UserWithRelationsDTO {
    id: number
    name: string
    createdAt: Date

    revenues: Revenue[]
    expenses: Expense[]
    categories: ExpenseCategory[]
}
