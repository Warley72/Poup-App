import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function GoalsFinance() {
    return (
        <Card className="bg-transparent flex flex-col justify-between w-full">
            <CardHeader>
                <CardTitle>Resumo</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1>Custos fixos</h1>
                    <span>30%</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1>Conforto</h1>
                    <span>30%</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1>Prazeres</h1>
                    <span>30%</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1>Metas</h1>
                    <span>30%</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1>Investimentos</h1>
                    <span>30%</span>
                </div>
                <div className="flex items-center justify-between">
                    <h1>Conhecimentos</h1>
                    <span>30%</span>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Editar</Button>
            </CardFooter>
        </Card>
    )
}
