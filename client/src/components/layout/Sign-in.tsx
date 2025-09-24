import Link from "next/link"

import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function SignIn() {
    return (
        <div className="flex items-center justify-center flex-col max-w-md w-full mx-auto rounded-2xl border p-8 ">
            <div className="flex items-center flex-col gap-2">
                <img className="h-[90px]" src="/logo/icon.svg" />
                <h1 className="text-2xl font-bold">PoupApp</h1>
                <p className="text-muted-foreground text-balance">Hora de colocar as finanças no azul</p>
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
                    <div className="flex items-center justify-between mt-4">
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
                <Link className="w-full" href={"/dashboard"}>
                    <Button>Login</Button>
                </Link>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-card text-muted-foreground relative z-1 ">
                        Or continue with
                    </span>
                </div>
                <Link className="w-full" href={""}>
                    <Button>Login with Google</Button>
                </Link>
                <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link className="no-underline hover:underline hover:underline-offset-[5px] text-white" href={"/sign-up"}>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
