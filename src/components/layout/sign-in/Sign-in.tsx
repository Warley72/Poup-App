import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import styles from "./sign-in.module.sass"

export default function SignIn() {
    return (
        <div className={styles.WrapperSignIn}>
            <div className={styles.ContentLogo}>
                <img className={styles.styleLogoPoupApp} src="/logo/logoPoupApp.png" alt="logoPoupApp" />
                <h1 className={styles.StyleTitle}>PoupApp</h1>
                <p className={styles.styleText}>Hora de colocar as finanças no azul</p>
            </div>
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
                    <div className={styles.contentLabelPassword}>
                        <Label className={styles.styleLabel} htmlFor="password">Password</Label>
                        <a className={styles.StyleTextLabelPassword} href="#">Forgot your password?</a>
                    </div>
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
                    <Link className="w-full" href={"/dashboard"}>
                        <Button>Log in</Button>
                    </Link>
                    <span className="text-white">OU</span>
                    <Link className="w-full" href={""}>
                        <Button>Login with Google</Button>
                    </Link>
                </div>
                <div className={styles.ContentSignUp}>
                    <Link className={styles.StyleLinkSignUp} href={"/sign-up"}>Sign Up</Link>
                </div>
            </div>
        </div>
        )
    }
