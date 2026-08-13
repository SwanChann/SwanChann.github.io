const dateFormatter = new Intl.DateTimeFormat('en', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: Date): string {
  return dateFormatter.format(date);
}

export function sameDay(first?: Date, second?: Date): boolean {
  if (!first || !second) return false;
  return first.toISOString().slice(0, 10) === second.toISOString().slice(0, 10);
}

