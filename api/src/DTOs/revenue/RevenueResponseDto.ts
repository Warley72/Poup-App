export interface RevenueResponseDTO {
    id: string
    month: number
    year: number
    total: number
    categories: {
        name: string
        amount: number
    }[]
}
