export const TextLimiter = {
  limit(text: string, minSize: number): string {
    if (text.length < minSize) {
      return text;
    }
    return text.slice(0, minSize) + '...';
  }
}
