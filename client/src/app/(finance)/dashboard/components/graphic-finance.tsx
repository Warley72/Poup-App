"use client"

import React from "react"

import { PieChart, Pie, Cell, Label } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

import { useExpensesStore } from "@/app/(finance)/dashboard/store/useExpensesStore"

export default function GraphicFinance() {
    const { expenses } = useExpensesStore()
    const total = expenses.reduce((acc, e) => acc + e.value, 0)

    const categories = [
        "Custos fixos",
        "Conforto",
        "Prazeres",
        "Metas",
        "Investimentos",
        "Conhecimentos",
    ]

    const colors = [
        "#22c55e",
        "#ef4444",
        "#3b82f6",
        "#eab308",
        "#8b5cf6",
        "#ec4899",
    ]

    const grouped = expenses.reduce<Record<string, number>>((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.value
        return acc
    }, {})

    const data =
        expenses.length > 0
            ? categories.map((category, i) => ({
                name: category,
                value: grouped[category] || 0,
                color: colors[i % colors.length],
            }))
            : [{ name: "Sem despesas", value: 1, color: "#444" }]

    return (
        <Card className="bg-transparent flex flex-col w-full">
            <CardHeader className="items-center">
                <CardTitle>Gastos</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col items-center justify-center">
                <ChartContainer
                    className="mx-auto aspect-square w-full max-w-[250px]"
                    config={
                        {
                            visitors: {
                                label: "Despesas",
                                color: "hsl(var(--chart-1))",
                            },
                        }
                    }
                >
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={85}
                            strokeWidth={5}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}

                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    R$ {total.toLocaleString("pt-BR")}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Total
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
                    {categories.map((name, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                            <span
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: colors[i % colors.length] }}
                            ></span>
                            <span className="text-muted-foreground">{name}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
