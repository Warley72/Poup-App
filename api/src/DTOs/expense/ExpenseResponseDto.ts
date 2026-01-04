export interface ExpenseResponseDTO {
    id: string
    name: string
    amount: number
    date: string
    category: {
        id: string
        name: string
    }
}
