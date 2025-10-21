import HeaderDashboard from "./components/header-dashboard"
import SalaryDashboard from "./components/salary-dashboard"
import GraphicFinance from "./components/graphic-finance"
import FinanceTable from "./components/FinanceTable"
import GoalsFinance from "./components/goals-finance"
import AnnotationFinance from "./components/annotation-finance"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
    return (
        <SidebarProvider className="px-4 md:px-10 lg:px-18 py-6 md:py-8 lg:py-10">
            <SidebarInset>
                <HeaderDashboard />
                <div className="flex flex-col gap-4">
                    <div className="mt-2">
                        <SalaryDashboard />
                    </div>
                    <div className="flex flex-col flex-wrap md:flex-row gap-8 mt-2">
                        <div className="flex flex-2">
                            <GraphicFinance />
                        </div>
                        <div className="flex flex-4">
                            <FinanceTable />
                        </div>
                        <div className="flex flex-2">
                            <GoalsFinance />
                        </div>
                    </div>
                    <div>
                        <AnnotationFinance />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
