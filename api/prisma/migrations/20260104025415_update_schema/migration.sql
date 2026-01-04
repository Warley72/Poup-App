/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `amountSpent` on the `ExpenseCategory` table. All the data in the column will be lost.
  - You are about to drop the column `utilized` on the `ExpenseCategory` table. All the data in the column will be lost.
  - You are about to drop the column `revenuesId` on the `RevenueCategory` table. All the data in the column will be lost.
  - You are about to drop the `Revenues` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `ExpenseCategory` table without a default value. This is not possible if the table is not empty.
  - Made the column `goal` on table `ExpenseCategory` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `revenueId` to the `RevenueCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "RevenueCategory" DROP CONSTRAINT "RevenueCategory_revenuesId_fkey";

-- DropForeignKey
ALTER TABLE "Revenues" DROP CONSTRAINT "Revenues_userId_fkey";

-- DropIndex
DROP INDEX "User_password_key";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "createdAt",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ExpenseCategory" DROP COLUMN "amountSpent",
DROP COLUMN "utilized",
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "goal" SET NOT NULL;

-- AlterTable
ALTER TABLE "RevenueCategory" DROP COLUMN "revenuesId",
ADD COLUMN     "revenueId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Revenues";

-- CreateTable
CREATE TABLE "Revenue" (
    "id" TEXT NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Revenue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Revenue" ADD CONSTRAINT "Revenue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RevenueCategory" ADD CONSTRAINT "RevenueCategory_revenueId_fkey" FOREIGN KEY ("revenueId") REFERENCES "Revenue"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ExpenseCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpenseCategory" ADD CONSTRAINT "ExpenseCategory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
