import { Dimensions } from 'react-native';

type SpacingKey = `x${number}`;
type SpacingTarget = Record<SpacingKey, number>;

const createSpacingBase = (width: number) => {
  const SPACING_BASE = width / 100;

  return {
    x1: SPACING_BASE * 1,
    x2: SPACING_BASE * 2,
    x3: SPACING_BASE * 3,
    x4: SPACING_BASE * 4,
    x5: SPACING_BASE * 5,
    x6: SPACING_BASE * 6,
    x7: SPACING_BASE * 7,
    x8: SPACING_BASE * 8,
    x9: SPACING_BASE * 9,
    x10: SPACING_BASE * 10,
  } satisfies SpacingTarget;
};

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

const isBuiltInProperty = (prop: string): boolean => {
  return (
    prop in Object.prototype ||
    prop === 'constructor' ||
    prop === '$$typeof' ||
    prop.startsWith('$$') ||
    prop.startsWith('__')
  );
};

const createSpacingHandler = (spacingBaseValue: number) => {
  const SPACING_BASE = spacingBaseValue;

  const handler: ProxyHandler<ReturnType<typeof createSpacingBase>> = {
    get(target, prop, receiver) {
      if (typeof prop === 'symbol') {
        return Reflect.get(target, prop, receiver);
      }

      if (Reflect.has(target, prop)) {
        return Reflect.get(target, prop, receiver);
      }

      if (isBuiltInProperty(prop)) {
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

  return handler;
};

const { width } = Dimensions.get('window');
const spacingBase = createSpacingBase(width);
const SPACING_BASE = width / 100;
const spacingHandler = createSpacingHandler(SPACING_BASE);

export const spacing: SpacingTarget = new Proxy(spacingBase, spacingHandler);
