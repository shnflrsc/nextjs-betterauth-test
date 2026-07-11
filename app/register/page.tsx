"use client";

import { useActionState } from "react";
import { registerAction, FormState } from "./actions";

const initialState: FormState = {
    success: false,
    message: '',
}

export default function Register() {
    const [state, formAction, isPending] = useActionState(registerAction, initialState);

    return (
        <main>
            <h1>Register</h1>
            <form action={formAction}>
                <label htmlFor="email">Email</label>
                <input className="border" type="text" id="email" name="email" />
                <label htmlFor="name">Name</label>
                <input className="border" type="text" id="name" name="name" />
                <label htmlFor="password">Password</label>
                <input className="border" type="password" id="password" name="password" />
                <input className="bg-blue-500 text-white p-2 rounded" type="submit" value={isPending ? "Registering..." : "Register"} disabled={isPending} />
            </form>
            {state.message ? <p>{state.message}</p> : null}
        </main>
    )
}