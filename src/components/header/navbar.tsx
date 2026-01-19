import { SignInButton, SignUpButton } from "@clerk/nextjs";
import AppLogo from "../app-logo";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6">
            <div>
                <AppLogo />
            </div>

            <div className="flex items-center space-x-2">
                <SignInButton>
                    <Button variant={'secondary'} size={'sm'}>
                        Login
                    </Button>
                </SignInButton>
                <SignUpButton>
                    <Button size={'sm'}>
                        Create an account
                    </Button>
                </SignUpButton>
            </div>
        </nav>
    )
}