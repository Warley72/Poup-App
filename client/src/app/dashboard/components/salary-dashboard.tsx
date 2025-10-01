export default function SalaryDashboard() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl ">Orçamentos domesticos</h1>
                <h1 className="text-lg">Renda do mes</h1>
            </div>
            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="text-lg">Controle seus orçamentos domésticos com base em próprias metas.</h1>
                </div>
                <div className="flex items-center gap-1">
                    <div className="flex items-center gap-4 rounded-lg border px-5 py-1">Outubro/2025</div>
                    <div className="flex items-center gap-4 rounded-lg border px-5 py-1">R$ 5000</div>
                </div>
            </div>
        </div>
    )
}
