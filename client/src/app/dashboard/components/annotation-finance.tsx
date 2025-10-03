import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { FaPlusCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { FaHamburger } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

export default function AnnotationFinance() {
    return (
        <div>
            <div className="flex justify-end gap-4 p-4">
                <FaHouse />
                <FaCarSide />
                <FaHamburger />
                <GoGoal />
                <FaRegMoneyBillAlt />
                <FaBrain />
            </div>
            <Card className="bg-transparent p-4">
                <div className="flex flex-col gap-8">
                    <h1>Custo Fixos</h1>
                    <div className="flex justify-between w-full gap-4">
                        <div className="flex flex-col w-full">
                            <h1>Nome</h1>
                        </div>
                        <div className="flex flex-col w-full">
                            <h1>Valor</h1>
                        </div>
                    </div>

                    <Separator className="my-4 bg-neutral-700" />

                    <h1>Adicionar custo</h1>
                    <div className="flex justify-between w-full gap-4">
                        <div className="flex flex-col w-full">
                            <h1>Nome</h1>
                            <Input />
                        </div>
                        <div className="flex flex-col w-full">
                            <h1>Valor</h1>
                            <Input />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button className="w-auto flex items-center gap-2 px-4 py-2 rounded-md border">
                            <FaPlusCircle />
                            Adicionar
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
