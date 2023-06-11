type ModsType = Record<string, string | boolean>

export function cls(cls: string, mods?: ModsType, additional?: string[]): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, modsValues]) => Boolean(modsValues))
      .map(([modsKeys]) => modsKeys),
  ]
    .join(' ');
}
