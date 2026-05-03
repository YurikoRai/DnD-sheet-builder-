import { z } from "zod";

export const CharacterSchema = z.object({
  name: z.string().min(1, "Имя обязательно"),
  raceId: z.string().nullable(),
  classId: z.string().nullable(),
  baseStats: z.object({
    str: z.number().min(1).max(20),
    dex: z.number().min(1).max(20),
    con: z.number().min(1).max(20),
    int: z.number().min(1).max(20),
    wis: z.number().min(1).max(20),
    cha: z.number().min(1).max(20),
  }),
});

export type Character = z.infer<typeof CharacterSchema>;
