export default function sum(items) {
  const result = items.reduce((acc, e) => acc + e, 0);
  return result;
}
