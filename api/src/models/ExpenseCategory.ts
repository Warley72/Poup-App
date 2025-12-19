import { Expense } from "../models/Expense"

export interface ExpenseCategory {
  id: string;
  name: string;
  percentage: number;
  shouldSpend: number;
  amountSpent: number;
  utilized: number;
  goal?: string | null;
  createdAt: Date;

  expenses: Expense[];
}
