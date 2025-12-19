export interface Expense {
    id: string
    name: string
    amount: number
    userId: number
    createdAt: Date

    categoryId: string
}
