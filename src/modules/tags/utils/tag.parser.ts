export class TagParser {
  private static readonly TAG_REGEX = / #(\w+)/g;

  public static parse(text: string): string[] {
    return [...new Set(` ${text}`.match(this.TAG_REGEX))].map((tag) =>
      tag.replace(/ #|#/, ''),
    );
  }

  public static validate(tag: string): boolean {
    return /^\w+$/.test(tag);
  }
}
