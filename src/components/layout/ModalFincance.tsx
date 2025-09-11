import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ModalFincance() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline">Add Invoice</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px]">
                    <DialogHeader className="flex items-center">
                        <DialogTitle>
                            <img className="w-[60px]" src="/logo/icon.svg" />
                        </DialogTitle>
                    </DialogHeader>
                    <div>
                        <div className="flex flex-col gap-2 mb-4">
                            <Label>Invoice</Label>
                            <Input></Input>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <Label>Invoice</Label>
                            <Input></Input>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <Label>Method</Label>
                            <Input></Input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label>Amount</Label>
                            <Input></Input>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Add Invoice</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
