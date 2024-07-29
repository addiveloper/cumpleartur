import * as z from "zod";

export const QuestionOneSchema = z.object({
  answer: z.enum(["fuck", "sigma", "hell", "diego"], {
    required_error: "Elige una oe",
  }),
});

export const QuestionTwoSchema = z.object({
  answer: z.enum(["papupro", "papudiego", "papu", "papusigma"], {
    required_error: "Elige una oe",
  }),
});

export const QuestionThreeSchema = z.object({
  answer: z.enum(["papumiguel", "papuarturo", "papuyon", "papubermeo"], {
    required_error: "Elige una oe",
  }),
});

export const QuestionFourSchema = z.object({
  answer: z.enum(
    ["cincomayo", "dieciochomayo", "veinticincomayo", "quincemayo"],
    {
      required_error: "Elige una oe",
    }
  ),
});

export const QuestionFiveSchema = z.object({
  answer: z.enum(["quincedic", "catorcedic", "trecedic", "dieciseisdic"], {
    required_error: "Elige una oe",
  }),
});

export const QuestionSixSchema = z.object({
  answer: z.enum(["diego", "kunno", "yolo", "all"], {
    required_error: "Elige una oe",
  }),
});

export const QuestionSevenSchema = z.object({
  answer: z.enum(["yes", "no"], {
    required_error: "Elige una oe",
  }),
});
