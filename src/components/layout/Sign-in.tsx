import Link from "next/link"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignIn() {

    return (
        <div className="flex items-center justify-center flex-col max-w-md w-full rounded-2xl border p-4">
            <div className="flex items-center flex-col">
                <img className="max-w-[100px] mb-2" src="/logo/Poup.svg" alt="logoPoupApp" />
                <h1>PoupApp</h1>
                <p>Hora de colocar as finanças no azul</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <form className="flex flex-col gap-2" action="">
                    <Label htmlFor="email">Email</Label>
                    <div>
                        <Input
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a
                            className="text-sm no-underline hover:underline hover:underline-offset-[5px] text-white"
                            href="#">Forgot your password?
                        </a>
                    </div>
                    <div>
                        <Input
                            id="password"
                            type="password"
                            required
                        />
                    </div>
                </form>
                <div className="flex items-center justify-between gap-4">
                    <Link className="w-full" href={"/dashboard"}>
                        <Button>Log in</Button>
                    </Link>
                    <span>OU</span>
                    <Link className="w-full" href={""}>
                        <Button>Login with Google</Button>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <Link className="no-underline hover:underline hover:underline-offset-[5px] text-white" href={"/sign-up"}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
