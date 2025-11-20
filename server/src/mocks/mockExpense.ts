import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {

    let user = await prisma.user.findFirst();

    if (!user) {
        user = await prisma.user.create({
            data: {
                name: "Usuário Teste",
                password: "1234"
            }
        });
    }

    let salary = await prisma.salary.findFirst({
        where: { userId: user.id }
    });

    if (!salary) {
        salary = await prisma.salary.create({
            data: {
                amount: 5000,
                userId: user.id
            }
        });
    }

    let category = await prisma.category.findFirst({
        where: { salaryId: salary.id }
    });

    if (!category) {
        category = await prisma.category.create({
            data: {
                name: "Alimentação",
                percentage: 20,
                shouldSpend: 1000,
                amountSpent: 0,
                utilized: 0,
                goal: "Controlar gastos com comida",
                salaryId: salary.id
            }
        });
    }

    const expense = await prisma.expense.create({
        data: {
            name: "Compra de comida",
            amount: 50.75,
            userId: user.id,
            salaryId: salary.id,
            categoryId: category.id
        }
    });

    console.log("Expense criada com sucesso:");
    console.log(expense);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
