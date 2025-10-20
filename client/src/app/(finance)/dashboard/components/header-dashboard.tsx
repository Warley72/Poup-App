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
                <div className="flex items-center">
                    <h1 className="text-lg md:text-3xl text-center font-medium uppercase">
                        Orçamentos domésticos
                    </h1>
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
