export default function SalaryDashboard() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-4">
                <h1 className="text-xl md:text-3xl font-medium">Orçamentos domesticos</h1>
                <h1 className="text-center">Controle seus orçamentos domésticos com base em próprias metas.</h1>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="md:text-lg">Renda do mes</h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4 rounded-lg border px-5 py-1">Outubro/2025</div>
                    <div className="flex items-center gap-4 rounded-lg border px-5 py-1">R$ 5000</div>
                </div>
            </div>
        </div>
    )
}
