export const NameLimiter = {
  limit(fullName: string): string {
    return fullName.split(' ')[0];
  }
}
