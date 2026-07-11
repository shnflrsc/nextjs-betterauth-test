"use server";

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export type FormState = {
    success: boolean,
    message: string
}

export async function registerAction(prevState: FormState, formData: FormData): Promise<FormState> {
    const rawFormData = {
        email: formData.get("email") as string,
        name: formData.get("name") as string,
        password: formData.get("password") as string,
    }

    try {
        const data = await auth.api.signUpEmail({
            body: {
                email: rawFormData.email,
                name: rawFormData.name,
                password: rawFormData.password,
            }
        });
        if (!data) {
            return {
                success: false,
                message: "Registration failed",
            }
        }
    } catch (error) {
        console.error("Registration error: ", error);
        return {
            success: false,
            message: "Registration failed",
        }
    }

    redirect("/login");
}