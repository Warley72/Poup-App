"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FaPlusCircle, FaCarSide, FaHamburger, FaBrain , FaMoneyBillAlt } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6";
import { GoGoal } from "react-icons/go"
import { useExpensesStore } from "@/app/(finance)/dashboard/store/useExpensesStore"

export default function AnnotationFinance() {
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Custos fixos")

    const { expenses, addExpense, removeExpense } = useExpensesStore()

    const handleAddExpense = () => {
        if (!name.trim() || !value.trim()) return
        addExpense(selectedCategory, name.trim(), parseFloat(value))
        setName("")
        setValue("")
    }

    const filtered = expenses.filter((e) => e.category === selectedCategory)

    return (
        <div>
            <div className="flex justify-end gap-2 p-2">
                {[
                    { icon: <FaHouse />, name: "Custos fixos" },
                    { icon: <FaCarSide />, name: "Conforto" },
                    { icon: <FaHamburger />, name: "Prazeres" },
                    { icon: <GoGoal />, name: "Metas" },
                    { icon: <FaMoneyBillAlt />, name: "Investimentos" },
                    { icon: <FaBrain />, name: "Conhecimentos" },
                ].map((cat) => (
                    <div
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`flex items-center justify-center h-8 w-8 rounded-sm cursor-pointer transition
              ${selectedCategory === cat.name ? "bg-secondary" : "hover:bg-secondary/50"}`}
                    >
                        {cat.icon}
                    </div>
                ))}
            </div>
            <Card className="bg-transparent p-4">
                <div className="flex flex-col gap-8">
                    <h1 className="capitalize font-medium">{selectedCategory}</h1>

                    <div className="flex justify-between w-full gap-4">
                        <div className="flex flex-col w-full">
                            <h1>Nome</h1>
                        </div>
                        <div className="flex flex-col w-full">
                            <h1>Valor</h1>
                        </div>
                    </div>

                    {filtered.length > 0 ? (
                        filtered.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center w-full gap-4 border-b border-neutral-800 py-2"
                            >
                                <div className="flex flex-col w-full">
                                    <span>{item.name}</span>
                                </div>
                                <div className="flex flex-col w-full">
                                    <span>R$ {item.value.toLocaleString("pt-BR")}</span>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeExpense(item.id)}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                                >
                                    ✕
                                </Button>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-neutral-500 italic">Nenhuma despesa adicionada</p>
                    )}

                    <Separator className="my-4 bg-neutral-700" />

                    <h1>Adicionar custo</h1>
                    <div className="flex justify-between w-full gap-4">
                        <div className="flex flex-col w-full">
                            <h1>Nome</h1>
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-full">
                            <h1>Valor</h1>
                            <Input
                                type="number"
                                placeholder="R$ 0,00"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button
                            onClick={handleAddExpense}
                            className="w-auto flex items-center gap-2 px-4 py-2 rounded-md border"
                        >
                            <FaPlusCircle />
                            Adicionar
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
