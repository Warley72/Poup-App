import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Card } from "@/components/ui/card"

export default function FinanceTable() {
    return (
        <Card className="bg-transparent w-full p-4">
            <h1 className="font-medium">Resumo</h1>
            <Table>
                <TableHeader className="bg-transparent">
                    <TableRow className="font-medium">
                        <TableHead>Budget</TableHead>
                        <TableHead>Valor gasto</TableHead>
                        <TableHead>Devo gastar</TableHead>
                        <TableHead>Utilizado</TableHead>
                        <TableHead>Total</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="font-medium">
                        <TableCell>Custos fixos</TableCell>
                        <TableCell>R$ 1700</TableCell>
                        <TableCell>R$ 1800</TableCell>
                        <TableCell className="text-green-600">95%</TableCell>
                        <TableCell>30%</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                        <TableCell>Conforto</TableCell>
                        <TableCell>R$ 1500</TableCell>
                        <TableCell>R$ 1800</TableCell>
                        <TableCell className="text-green-600">95%</TableCell>
                        <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                        <TableCell>Prazeres</TableCell>
                        <TableCell>R$ 1500</TableCell>
                        <TableCell>R$ 1800</TableCell>
                        <TableCell className="text-green-600">95%</TableCell>
                        <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                        <TableCell>Metas</TableCell>
                        <TableCell>R$ 1500</TableCell>
                        <TableCell>R$ 1800</TableCell>
                        <TableCell className="text-green-600">95%</TableCell>
                        <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                        <TableCell>Investimentos</TableCell>
                        <TableCell>R$ 1500</TableCell>
                        <TableCell>R$ 1800</TableCell>
                        <TableCell className="text-green-600">95%</TableCell>
                        <TableCell>20%</TableCell>
                    </TableRow>
                    <TableRow className="font-medium">
                        <TableCell>Conhecimentos</TableCell>
                        <TableCell>R$ 1500</TableCell>
                        <TableCell>R$ 1800</TableCell>
                        <TableCell className="text-green-600">95%</TableCell>
                        <TableCell>20%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="flex items-center justify-center gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-green-500 text-lg font-medium">R$ 5000</h1>
                    <h2>Total a gastar</h2>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-red-500 text-lg font-medium">R$ 1700</h1>
                    <h2>Total gastos</h2>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-lg font-medium">34%</h1>
                    <h2>Utilizado</h2>
                </div>
            </div>
        </Card>
    )
}
