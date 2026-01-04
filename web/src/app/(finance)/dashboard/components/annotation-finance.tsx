"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { FaPlusCircle, FaCarSide, FaHamburger, FaBrain, FaMoneyBillAlt, FaEdit } from "react-icons/fa"
import { FaHouse } from "react-icons/fa6"
import { GoGoal } from "react-icons/go"

import { createExpense } from "@/services/api"
import { useExpensesStore } from "@/app/(finance)/dashboard/store/useExpensesStore"

export default function AnnotationFinance() {
    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Custos fixos")
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editName, setEditName] = useState("")
    const [editValue, setEditValue] = useState("")

    const { expenses, addExpense, removeExpense, updateExpense } = useExpensesStore()

    const handleAddExpense = async () => {
        if (!name.trim() || !value.trim()) return

        try {
            const response = await createExpense({
                name,
                amount: parseFloat(value),
                userId: 8,
                categoryId: "f3aceec7-837f-4071-b57f-c25e214db1db",
            })

            console.log("Criado no backend:", response)

            addExpense(selectedCategory, response.name, response.amount)

            setName("")
            setValue("")
        } catch (error) {
            console.error("Erro ao criar expense:", error)
        }
    }

    const handleSaveEdit = (id: string) => {
        if (!editName.trim() || !editValue.trim()) return
        updateExpense(id, editName.trim(), parseFloat(editValue))
        setEditingId(null)
        setEditName("")
        setEditValue("")
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
                                {editingId === item.id ? (
                                    <>
                                        <div className="flex w-full">
                                            <Input
                                                value={editName}
                                                onChange={(e) => setEditName(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex w-full">
                                            <Input
                                                type="number"
                                                value={editValue}
                                                onChange={(e) => setEditValue(e.target.value)}
                                            />
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => handleSaveEdit(item.id)}
                                                className="text-green-500 hover:text-green-600 hover:bg-green-500/10"
                                            >
                                                ✔
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setEditingId(null)}
                                                className="text-neutral-400 hover:text-neutral-300 hover:bg-neutral-700/30"
                                            >
                                                ✕
                                            </Button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex flex-col w-full">
                                            <span>{item.name}</span>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <span>R$ {item.value.toLocaleString("pt-BR")}</span>
                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => {
                                                        setEditingId(item.id)
                                                        setEditName(item.name)
                                                        setEditValue(item.value.toString())
                                                    }}
                                                >
                                                    <FaEdit />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeExpense(item.id)}
                                                    className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                                                >
                                                    ✕
                                                </Button>
                                            </div>
                                        </div>
                                    </>
                                )}
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
                            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="flex flex-col w-full">
                            <h1>Valor</h1>
                            <Input type="number" placeholder="R$ 0,00" value={value} onChange={(e) => setValue(e.target.value)} />
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
