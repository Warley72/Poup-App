export interface RevenueCreateDto {
    month: number
    year: number
    categories: {
        name: string
        amount: number
    }[]
}
