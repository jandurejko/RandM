export function mergeQueryStrings(query1: string, query2: string): string {
  const q1 = new URLSearchParams(query1 || '');
  const q2 = new URLSearchParams(query2 || '');

  q2.forEach((value, name) => {
    q1.set(name, value);
  });

  return q1.toString();
}
