import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function GoalsFinance () {
    return (
        <Card className="flex flex-col justify-between w-full">
            <CardHeader>
                <CardTitle>Resumo</CardTitle>
            </CardHeader>
            <CardContent>
                <h1>teste1</h1>
                <h1>teste2</h1>
                <h1>teste3</h1>
                <h1>teste3</h1>
                <h1>teste3</h1>
            </CardContent>
            <CardFooter>
                <Button>Editar</Button>
            </CardFooter>
        </Card>
    )
}
