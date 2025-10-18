"use client"

import { Input } from "@/components/ui/input"
import { useFinanceStore } from "@/app/(finance)/dashboard/store/useFinanceStore"

export default function SalaryDashboard() {
  const { salary, setSalary } = useFinanceStore()

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4">
      <div className="flex flex-col items-center md:items-start gap-4">
        <h1 className="text-xl md:text-3xl font-medium">Orçamentos domésticos</h1>
        <h1 className="text-center md:text-left text-sm md:text-base">
          Controle seus orçamentos domésticos com base em suas próprias metas.
        </h1>
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="md:text-lg">Renda do mês</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-lg border px-5 py-1.5 whitespace-nowrap">
            Outubro / 2025
          </div>
          <Input
            type="number"
            placeholder="Salário"
            value={salary || ""}
            onChange={(e) => setSalary(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}
