export async function getUserExpenses(userId: number) {
  const res = await fetch(`http://localhost:4000/expense`)

    console.log("STATUS:", res.status)

  if (!res.ok) throw new Error("Erro ao buscar despesas")
  return res.json()
}

export async function createExpense(data: {
  name: string
  amount: number
  userId: number
  categoryId: string
}) {
  const res = await fetch(`http://localhost:4000/expense`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) throw new Error("Erro ao criar expense")
  return res.json()
}
