import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import styles from "./sign-in.module.sass"

export default function SignIn() {
    return (
        <div className={styles.WrapperSignIn}>
            <img className={styles.styleLogoPoupApp} src="/logo/logoPoupApp.png" alt="logoPoupApp" />
            <div className={styles.ContentSignIn}>
                <form className={styles.styleForm} action="">
                    <Label className={styles.styleLabel} htmlFor="email">Email</Label>
                    <div>
                        <Input
                            className={styles.styleInput}
                            id="email"
                            type="email"
                            placeholder="email@example.com"
                            required
                        />
                    </div>
                    <Label className={styles.styleLabel} htmlFor="password">password</Label>
                    <div>
                        <Input
                            className={styles.styleInput}
                            id="password"
                            type="password"
                            required
                        />
                    </div>
                </form>
                <div className={styles.ContentButtonSignIn}>
                    <Link href={"/dashboard"}>
                        <Button>Login</Button>
                    </Link>
                    <Link href={"/sign-up"}>
                        <Button>Login with Google</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
