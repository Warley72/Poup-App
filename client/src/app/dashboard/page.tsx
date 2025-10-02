import { AppSidebar } from "@/app/dashboard/components/app-sidebar"
import { SidebarInset, SidebarProvider, } from "../../components/ui/sidebar"

import HeaderDashboard from "./components/header-dashboard"
import SalaryDashboard from "./components/salary-dashboard"
import GraphicFinance from "./components/graphic-finance"
import FinanceTable from "./components/FinanceTable"
import GoalsFinance from "./components/goals-finance"
import AnnotationFinance from "./components/annotation-finance"

export default function Page() {
    return (
        <SidebarProvider className="px-18 py-10">
            <AppSidebar />
            <SidebarInset>
                <HeaderDashboard />
                <div className="flex flex-col gap-4">
                    <div className="mt-5">
                        <SalaryDashboard />
                    </div>
                   <div className="flex gap-8 mt-10">
                        <div className="flex flex-1">
                            <GraphicFinance />
                        </div>
                        <div className="flex flex-3">
                            <FinanceTable />
                        </div>
                        <div className="flex flex-1">
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
