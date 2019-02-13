type Predicate<T> = (o: T) => boolean;

export function isIn<T = string>(list: T[]): Predicate<T> {
  return (a: T) => list.includes(a);
}
