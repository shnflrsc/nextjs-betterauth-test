import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "@/lib/index";
import * as schema from "@/lib/schema";

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    plugins: [nextCookies()],
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
});