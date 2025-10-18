import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function HeaderDashboard() {
    return (
        <header>
            <div className="flex items-center justify-between w-full">
                <div className="block md:hidden">
                    <SidebarTrigger className="h-8 w-8 rounded-sm border hover:bg-neutral-800" />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                    <div>
                        <h1 className="text-sm md:text-xl lg:text-2xl uppercase">
                            Orçamentos domésticos
                        </h1>
                    </div>
                    <Separator
                        orientation="vertical"
                        className="hidden lg:block data-[orientation=vertical]:h-6 bg-neutral-700"
                    />
                    <div>
                        <h1 className="text-sm md:text-xl lg:text-2xl uppercase">
                            Minhas Metas
                        </h1>
                    </div>
                </div>
                <div className="flex items-center gap-4 rounded-lg border p-1">
                    <h1 className="hidden md:block">Olá, Warley</h1>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <Separator className="my-4 bg-neutral-700" />
        </header>
    )
}
