import * as z from "zod";

export const introSchema = z.object({
  link: z
    .string()
    .min(1, { message: "Bro, que chucha haces, gye. Tienes que poner algo." })
    .max(50, { message: "No es tan largo oeeee" }),
});
