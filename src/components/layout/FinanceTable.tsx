import { invoices } from "@/mocks/invoices"
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
        <Table>
            <TableHeader>
                <TableRow >
                    <TableHead >Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead >Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.id}>
                        <TableCell >{invoice.invoice}</TableCell>
                        <TableCell >{invoice.paymentStatus}</TableCell>
                        <TableCell >{invoice.paymentMethod}</TableCell>
                        <TableCell >{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
