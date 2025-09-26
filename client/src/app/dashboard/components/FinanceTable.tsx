import { invoices } from "@/app/dashboard/mocks/invoices"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function FinanceTable() {
    return (
        <Table className="border shadow-sm">
            <TableHeader>
                <TableRow >
                    <TableHead >Budget</TableHead>
                    <TableHead>Valor gasto</TableHead>
                    <TableHead>Devo gastar</TableHead>
                    <TableHead >Utilizado</TableHead>
                    <TableHead >Total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell >{invoice.invoice}</TableCell>
                        <TableCell >{invoice.paymentStatus}</TableCell>
                        <TableCell >{invoice.paymentMethod}</TableCell>
                        <TableCell >{invoice.totalAmount}</TableCell>
                        <TableCell >{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
