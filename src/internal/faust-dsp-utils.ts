export function lines(lines: string[]): string {
  return lines.join("\n");
}

export function series<T>(
  arr: T[],
  joiner: string,
  callback: (value: T, key: number) => string
): string {
  return arr.map(callback).join(joiner);
}

export function env(name: string, dsp: string): string {
  return `${name} = environment { \n  ${dsp.replace(/\n/g, "\n  ")} \n};\n`;
}
