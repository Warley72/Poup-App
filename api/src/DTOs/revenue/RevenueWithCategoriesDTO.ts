export interface RevenueWithCategoriesDTO {
    id: string
    month: number
    year: number
    createdAt: Date

    categories: {
        id: string
        name: string
        amount: number
        createdAt: Date
        revenueId: string
    }[]
}
