import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const categoryColors: Record<string, string> = {
  WTT: "#d45022",
  Olympia: "#107c10",
  ETTU: "#0056b3",
  Leagues: "#6a1b9a",
  Various: "#6f42c1",
  TTBL: "#333333",
  "Pro A": "#F0CF65",
  "T.League": "#5E4352",
  MLTT: "#4D6CFA",
  CTTSL: "#4D6CFA",
};
