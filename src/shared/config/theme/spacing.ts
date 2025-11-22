const SPACING_BASE = 4;

type SpacingKey = `x${number}`;
type SpacingTarget = Record<SpacingKey, number>;

const spacingBase = {
  x1: 4, // 1×base
  x2: 8, // 2×base
  x3: 12, // 3×base
  x4: 16, // 4×base
  x5: 20, // 5×base
  x6: 24, // 6×base
  x7: 28, // 7×base
  x8: 32, // 8×base
  x9: 36, // 9×base
  x10: 40, // 10×base
} satisfies SpacingTarget;

const isValidSpacingKey = (key: string): key is SpacingKey => {
  return key.startsWith('x') && key.length > 1;
};

const extractNumberFromKey = (key: string): number | null => {
  const numPart = key.slice(1);
  const parsedNum = Number.parseInt(numPart, 10);

  if (!Number.isFinite(parsedNum) || parsedNum <= 0) {
    return null;
  }

  if (numPart !== parsedNum.toString()) {
    return null;
  }

  return parsedNum;
};

const spacingHandler: ProxyHandler<typeof spacingBase> = {
  get(target, prop, receiver) {
    if (typeof prop === 'symbol') {
      return Reflect.get(target, prop, receiver);
    }

    if (Reflect.has(target, prop)) {
      return Reflect.get(target, prop, receiver);
    }

    if (!isValidSpacingKey(prop)) {
      throw new Error(
        `Invalid spacing key format: "${prop}". Expected format: "x{positiveNumber}"`,
      );
    }

    const multiplier = extractNumberFromKey(prop);

    if (multiplier === null) {
      throw new Error(
        `Invalid spacing key: "${prop}". The number part must be a positive integer.`,
      );
    }

    return multiplier * SPACING_BASE;
  },
};

export const spacing: SpacingTarget = new Proxy(spacingBase, spacingHandler);
