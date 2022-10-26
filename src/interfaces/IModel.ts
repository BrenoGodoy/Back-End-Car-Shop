export interface IModel<T> {
  create(param: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(param: string): Promise<T | null>;
  update(param: string, param2: T): Promise<T | null>;
  delete(param: string): Promise<T | null>;
}
