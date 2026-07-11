import Link from "next/link"

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </nav>
        </header>
    )
}