"use client";

import { authClient } from "@/lib/auth-client"

export default function Home() {
    
    const {
        data: session
    } = authClient.useSession();
    
    return (
        <main>
            {session ? `Logged in as ${session.user.email}` : "Not logged in"}
            {session ? <button className="bg-blue-500 text-white p-2 rounded" onClick={() => authClient.signOut()}>Logout</button> : null}
        </main>
    )
}