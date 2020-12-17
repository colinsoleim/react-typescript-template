/* eslint @typescript-eslint/ban-types: 'off' */

export type Dict<T> = { [index: string]: T };
export type Primitive = string | number | boolean;
export type PrimitiveDict = Dict<Primitive>;

export type TranslationParams = Dict<Primitive> | Object;

export class Translation {
  key: string;
  params: TranslationParams;

  constructor(key: string, params: TranslationParams = {}) {
    this.key = key;
    this.params = params;
  }

  static readonly convertEach = (keys: string[]): Translation[] => (keys || []).map((e) => new Translation(e));
}
