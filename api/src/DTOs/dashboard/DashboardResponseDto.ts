export interface DashboardResponseDto {
    period: {
        month: number
        year: number
    }

    totals: {
        income: number
        expense: number
        balance: number
    }

    expensesByCategory: {
        categoryId: string
        name: string
        budget: number
        spent: number
        remaining: number
        utilization: number
    }[]
}
