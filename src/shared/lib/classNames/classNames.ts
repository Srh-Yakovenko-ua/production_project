type ModsType = Record<string, string | boolean>;

export function cls(
  cls: string,
  mods: ModsType = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, modsValue]) => Boolean(modsValue))
      .map(([modsKey]) => modsKey),
  ].join(' ');
}
