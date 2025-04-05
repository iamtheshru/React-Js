import { z } from "zod";

export const MessageSchema = z.object({
    content: z
        .string()
        .min(10, { message: "Accept messages must be at least 10 characters" })
        .max(300, { message: "Accept messages must be at most 300 characters" })
})