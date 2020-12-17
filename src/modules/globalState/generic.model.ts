export type Primitive = string | number | boolean;

export class IdLabel<T extends string | number = string> {
  id: T;
  label: string;
  count?: number;

  static fromStrings = (items: string[]): IdLabel<string>[] => (items || []).map((item) => ({ id: item, label: item }));
  static includesId = (id: string, items: IdLabel<string>[]): boolean => (items || []).some((i) => i.id === id);
  static includesAnyId = (ids: string[], items: IdLabel<string>[]): boolean =>
    (ids || []).some((id) => IdLabel.includesId(id, items));
  static includesAllIds = (ids: string[], items: IdLabel<string>[]): boolean =>
    (ids || []).every((id) => IdLabel.includesId(id, items));
}
