function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
function choose(n: number, k: number): bigint {
  if (k < 0 || k > n) return 0n;
  let c = 1n;
  k = Math.min(k, n - k);
  for (let i = 1; i <= k; i++) c = (c * BigInt(n - k + i)) / BigInt(i);
  return c;
}
export function narayana(n: number, k: number): bigint {
  integer(n, 0, 1000);
  integer(k, 0, 1000);
  if (n === 0) return k === 0 ? 1n : 0n;
  if (k === 0 || k > n) return 0n;
  return (choose(n, k) * choose(n, k - 1)) / BigInt(n);
}
