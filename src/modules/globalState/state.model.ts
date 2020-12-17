import { _deepEquals, _arrayValuesMatch } from './utils';
import { IdLabel, Primitive } from './generic.model';

export type StateSlicer<StateType, ReturnType> = (state: StateType) => ReturnType;
export type BooleanStateSlicer<StateType> = StateSlicer<StateType, boolean>;
export type ArrayStateSlicer<StateType, ArrayType> = StateSlicer<StateType, ArrayType[]>;
export type StringArrayStateSlicer<StateType> = ArrayStateSlicer<StateType, string>;
export type ObjectStateSlicer<StateType> = StateSlicer<StateType, Object>;
export type ComparisonFunc<T> = (a: T, b: T) => boolean;

export const compareNumbers: ComparisonFunc<number> = (a: number, b: number) => a === b;
export const compareBooleans: ComparisonFunc<boolean> = (a: boolean, b: boolean) => a === b;
export const compareObjectsDeepEquals: ComparisonFunc<any> = (a, b) => _deepEquals(a, b);
export const compareArrayValues: ComparisonFunc<Primitive[]> = (a: Primitive[], b: Primitive[]) =>
  _arrayValuesMatch(a, b);
export const compareLabels = (a: IdLabel<string>[], b: IdLabel<string>[]) => {
  return compareArrayValues(
    a.map((item) => item.label),
    b.map((item) => item.label),
  );
};
