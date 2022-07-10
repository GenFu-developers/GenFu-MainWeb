import { useSession, signIn, signOut } from "next-auth/react"
import Button from "../Button/Button"

export default function Component() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                <Button type="button" buttonStyle="warning" callback={() => signOut()}>
                    <span>
                        Sign out
                    </span>
                </Button>
            </>)
    } return (
        <>
            <Button type="button" buttonStyle="success" callback={() => signIn()}>
                <span>
                    Sign in
                </span>
            </Button>
        </>)
}