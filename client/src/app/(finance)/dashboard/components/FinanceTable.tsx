"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { useFinanceStore } from "@/app/(finance)/dashboard/store/useFinanceStore"
import { useExpensesStore } from "@/app/(finance)/dashboard/store/useExpensesStore"

export default function FinanceTable() {
    const { salary, goals } = useFinanceStore()
    const { expenses } = useExpensesStore()

    const categories = [
        { name: "Custos fixos", percent: goals.custosFixos },
        { name: "Conforto", percent: goals.conforto },
        { name: "Prazeres", percent: goals.prazeres },
        { name: "Metas", percent: goals.metas },
        { name: "Investimentos", percent: goals.investimentos },
        { name: "Conhecimentos", percent: goals.conhecimentos },
    ]

    const calc = categories.map((cat) => {
        const expected = (salary * cat.percent) / 100
        const spent = expenses
            .filter((e) => e.category === cat.name)
            .reduce((acc, e) => acc + e.value, 0)
        const usedPercent = expected > 0 ? Math.round((spent / expected) * 100) : 0

        return {
            ...cat,
            value: expected,
            spent,
            usedPercent,
        }
    })

    const totalRealExpenses = expenses.reduce((acc, e) => acc + e.value, 0)
    const utilizationPercent = salary > 0 ? Math.round((totalRealExpenses / salary) * 100) : 0

    return (
        <Card className="bg-transparent w-full p-4">
            <h1 className="font-semibold mb-2">Resumo</h1>
            <Table>
                <TableHeader>
                    <TableRow className="font-medium">
                        <TableHead>Categoria</TableHead>
                        <TableHead>Valor gasto</TableHead>
                        <TableHead>Devo gastar</TableHead>
                        <TableHead>Utilizado</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {calc.map((cat) => (
                        <TableRow key={cat.name} className="font-medium">
                            <TableCell>{cat.name}</TableCell>
                            <TableCell>
                                R$ {cat.spent.toLocaleString("pt-BR")}
                            </TableCell>
                            <TableCell>
                                R$ {cat.value.toLocaleString("pt-BR")}
                            </TableCell>
                            <TableCell>{cat.usedPercent}%</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <div className="flex items-center justify-center gap-8 mt-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-green-500 text-lg font-medium">
                        R$ {salary.toLocaleString("pt-BR")}
                    </h1>
                    <h2>Receitas</h2>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-red-500 text-lg font-medium">
                        R$ {totalRealExpenses.toLocaleString("pt-BR")}
                    </h1>
                    <h2>Despesas</h2>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-lg font-medium">{utilizationPercent}%</h1>
                    <h2>Utilizado</h2>
                </div>
            </div>
        </Card>
    )
}
