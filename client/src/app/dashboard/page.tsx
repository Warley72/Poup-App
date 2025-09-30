import { AppSidebar } from "@/app/dashboard/components/app-sidebar"

import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "../../components/ui/sidebar"

import HeaderDashboard from "./components/header-dashboard"
import SalaryDashboard from "./components/salary-dashboard"
import GraphicFinance from "./components/graphic-finance"
import FinanceTable from "./components/FinanceTable"
import GoalsFinance from "./components/goals-finance"

export default function Page() {
    return (
        <SidebarProvider className="p-10">
            <AppSidebar />
            <SidebarInset>
                <HeaderDashboard />
                <div>
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
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
