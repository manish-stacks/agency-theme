export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function pad(n: number): string {
  return String(n).padStart(2, "0");
}
