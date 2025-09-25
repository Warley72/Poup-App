"use client"
import Link from "next/link";

import { FaHome } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="flex items-center justify-center">
                <img className="mt-4 w-14" src="/logo/icon.svg" />
            </SidebarHeader>
            <SidebarContent>
                <Link href={"/"}>
                    <div className="flex flex-col items-center gap-0.5">
                        <FaHome className="h-[1.8rem] w-[1.8rem]" />
                        <h1>Home</h1>
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className="flex flex-col items-center gap-0.5">
                        <FaWallet className="h-[1.8rem] w-[1.8rem]" />
                        <h1 >Carteira</h1>
                    </div>
                </Link>
                <Link href={"/"}>
                    <div className="flex flex-col items-center gap-0.5">
                        <FaCalculator className="h-[1.8rem] w-[1.8rem]" />
                        <h1 >Orçamentos <br /> domesticos</h1>
                    </div>
                </Link>
            </SidebarContent>
            <SidebarFooter>
                <Link href={"/"}>
                    <div className="flex flex-col items-center gap-0.5">
                        <RxExit className="h-[1.8rem] w-[1.8rem]" />
                        <h1>Sair</h1>
                    </div>
                </Link>
            </SidebarFooter>
        </Sidebar>
    )
}
