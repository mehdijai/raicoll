export class NumberFormatter {
  static localShort(num: number): string {
    const formatter = Intl.NumberFormat("fr-FR", {
      roundingPriority: "lessPrecision",
      maximumFractionDigits: 2,
      roundingMode: "ceil",
      useGrouping: "true",
      style: "decimal",
      localeMatcher: "best fit",
      notation: "compact",
    });
    return formatter.format(num);
  }
}
