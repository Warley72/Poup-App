import { AppSidebar } from "@/app/dashboard/components/app-sidebar"
import { Separator } from "../../components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
} from "../../components/ui/breadcrumb"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "../../components/ui/sidebar"
import FinanceTable from "./components/FinanceTable"
import { Button } from "../../components/ui/button"

import ModalFincance from "./components/ModalFincance"
import GraphicFinance from "./components/graphic-finance"
import GoalsFinance from "./components/goals-finance"

export default function Page() {
    return (
        <SidebarProvider className="px-10">
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-30 shrink-0 items-center transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex flex-col w-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-8">
                                <h1 className="text-3xl">Orçamentos domesticos</h1>
                                <h1 className="text-3xl">Minhas Metas</h1>
                            </div>
                            <div>
                                <Button>Ola, Warley</Button>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex flex-1 flex-col">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl">Orçamentos domesticos</h1>
                            <h1 className="text-lg">Renda do mes</h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <h1 className="text-lg">Controle seus orçamentos domésticos com base em próprias metas.</h1>
                            <div className="flex">
                                <Button>R$5000</Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-8  mt-5">
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
