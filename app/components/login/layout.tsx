import Link from "next/link"

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav><Link href="/"><h2>Home</h2></Link></nav>
            <main>
                {children}
            </main>
        </>
    )
}