import { narayana } from '@lp-labs/narayana-numbers';
if (narayana(4, 2) !== 6n) throw new Error('Count');
// @ts-expect-error invalid argument must be rejected by declarations
narayana('4', 2);
