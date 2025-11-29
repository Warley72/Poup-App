import { Expense } from "../models/Expense"
import { Category } from "../models/Category"

export interface Salary {
  id: string;
  amount: number;
  createdAt: Date;

  userId: number;

  Expense?: Expense[];
  Category?: Category[];
}
