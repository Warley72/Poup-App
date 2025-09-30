import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function HeaderDashboard() {
    return (
        <header>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <SidebarTrigger className="
                            h-9 w-9 flex items-center justify-center rounded-md
                            border border-neutral-700 hover:bg-neutral-800 transition-colors"
                        />
                        <Separator
                            orientation="vertical"
                            className="hidden sm:block data-[orientation=vertical]:h-6 bg-neutral-700"
                        />
                        <div className="flex items-center gap-4 ">
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase">
                                Orçamentos domésticos
                            </h1>
                            <Separator
                                orientation="vertical"
                                className="hidden sm:block data-[orientation=vertical]:h-6 bg-neutral-700"
                            />
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl uppercase">
                                Minhas Metas
                            </h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-xl border p-1.5">
                        <h1 className="hidden md:block">Olá, Warley</h1>
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <Separator className="my-4 bg-neutral-700" />
            </div>
        </header>
    )
}
