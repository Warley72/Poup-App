import { Expense } from "../models/Expense"

export interface Category {
  id: string;
  name: string;
  percentage: number;
  shouldSpend: number;
  amountSpent: number;
  utilized: number;
  goal?: string | null;
  createdAt: Date;

  salaryId: string;

  expenses?: Expense[];
}
