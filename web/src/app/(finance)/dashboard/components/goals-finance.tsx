"use client"

import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DialogClose } from "@/components/ui/dialog"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useFinanceStore } from "@/app/(finance)/dashboard/store/useFinanceStore"

export default function GoalsFinance() {
    const { goals, setGoals } = useFinanceStore()
    const [custosFixos, setCustosFixos] = useState(goals.custosFixos)
    const [conforto, setConforto] = useState(goals.conforto)
    const [prazeres, setPrazeres] = useState(goals.prazeres)
    const [metas, setMetas] = useState(goals.metas)
    const [investimentos, setinvestimentos] = useState(goals.investimentos)
    const [conhecimentos, setConhecimentos] = useState(goals.conhecimentos)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(custosFixos + conforto + prazeres + metas + investimentos + conhecimentos)
    }, [custosFixos, conforto, prazeres, metas, investimentos, conhecimentos])

    const handleSave = () => {
        setGoals({
            custosFixos,
            conforto,
            prazeres,
            metas,
            conhecimentos,
            investimentos,
        })
    }

    return (
        <Card className="bg-transparent flex flex-col justify-between w-full">
            <CardHeader>
                <CardTitle>Metas</CardTitle>
                <div className="text-center">
                    <h1>Total {total}%</h1>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <GoalDisplay label="Custos fixos" value={goals.custosFixos} />
                <GoalDisplay label="Conforto" value={goals.conforto} />
                <GoalDisplay label="Prazeres" value={goals.prazeres} />
                <GoalDisplay label="Metas" value={goals.metas} />
                <GoalDisplay label="Investimentos" value={goals.investimentos} />
                <GoalDisplay label="Conhecimentos" value={goals.conhecimentos} />
            </CardContent>
            
            <CardFooter>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Editar</Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Minhas metas</DialogTitle>
                            <DialogDescription>
                                Ajuste os valores abaixo conforme desejar.
                            </DialogDescription>
                            <div className="text-center">
                                <h1>Total {total}%</h1>
                            </div>
                        </DialogHeader>

                        <div className="grid gap-6">
                            <SliderGroup label="Custos fixos" value={custosFixos} onChange={setCustosFixos} />
                            <SliderGroup label="Conforto" value={conforto} onChange={setConforto} />
                            <SliderGroup label="Prazeres" value={prazeres} onChange={setPrazeres} />
                            <SliderGroup label="Metas" value={metas} onChange={setMetas} />
                            <SliderGroup label="Investimentos" value={investimentos} onChange={setinvestimentos} />
                            <SliderGroup label="Conhecimentos" value={conhecimentos} onChange={setConhecimentos} />
                        </div>

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" onClick={handleSave}>
                                    Salvar
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </CardFooter>
        </Card>
    )
}

function GoalDisplay({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex justify-between">
            <h1>{label}</h1>
            <span>{value}%</span>
        </div>
    )
}

function SliderGroup({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
    return (
        <div className="grid gap-2">
            <Label>{label}: {value}%</Label>
            <Slider value={[value]} onValueChange={(val) => onChange(val[0])} max={100} step={1} />
        </div>
    )
}
