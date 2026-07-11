"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export type FormState = {
    success: boolean,
    message: string
}

export async function loginAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    };

    const data = await auth.api.signInEmail({
        body: {
            email: rawFormData.email,
            password: rawFormData.password,
        }
    });

    if (data) {
        redirect("/");
    } else {
        return {
            success: false,
            message: "Login failed",
        }
    }
}