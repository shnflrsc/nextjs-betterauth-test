"use client";

import { useActionState } from "react";
import { loginAction, FormState } from "./actions";

const initialState: FormState = {
    success: false,
    message: '',
}

export default function Login() {

    const [state, formAction, isPending] = useActionState(loginAction, initialState);

    return (
        <main>
            <h1>Login</h1>
            <form action={formAction}>
                <label htmlFor="email">Email</label>
                <input className="border" type="text" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input className="border" type="password" id="password" name="password" />
                <input className="bg-blue-500 text-white p-2 rounded" type="submit" value="Login" />
            </form>
        </main>
    )
}