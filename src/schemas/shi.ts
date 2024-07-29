import * as z from "zod";

export const shiSchema = z.object({
  answer: z
    .string()
    .min(1, { message: "Bro, que chucha haces, gye. Tienes que poner algo." })
    .max(30, { message: "No es tan largo oeeee" }),
});
