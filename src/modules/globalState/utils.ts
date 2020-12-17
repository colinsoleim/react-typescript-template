import { Primitive } from './generic.model';

export const _size = (items: any[] | string): number => (items || []).length;
export const _keys = (obj: Object): string[] => (obj ? Object.keys(obj) : []);

export const _arrayValuesMatch = (one: Primitive[], two: Primitive[]): boolean => {
  if (one && !two) return false;
  if (two && !one) return false;
  if (!one && !two) return true;
  if (_size(one) !== _size(two)) return false;
  let result = true;
  one.forEach((oneValue, index) => {
    if (two[index] !== oneValue) result = false;
  });
  return result;
};

export const _deepEquals = (x: any, y: any): boolean => {
  if (x === y) return true;

  if (typeof x === 'object' && x != null && typeof y === 'object' && y != null) {
    if (_size(_keys(x)) !== _size(_keys(y))) return false;

    for (const prop in x) {
      if (!y.hasOwnProperty(prop)) return false;

      if (!_deepEquals(x[prop], y[prop])) return false;
    }

    return true;
  }
  return false;
};
