import { ExpenseResponseDTO } from "../expense/ExpenseResponseDto"

export interface ExpenseListDTO {
    total: number
    items: ExpenseResponseDTO[]
}
