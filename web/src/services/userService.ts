const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getUsers() {
  const res = await fetch(`${API_URL}/user`, {
    cache: "no-store" 
  })

  if (!res.ok) {
    throw new Error("Erro ao buscar usuários")
  }

  return res.json()
}
