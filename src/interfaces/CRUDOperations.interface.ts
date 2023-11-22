export interface CRUDOperations<T> {
  createData: (newData: Omit<T, "id">) => Promise<T>;
  readData: () => Promise<T[]>;
  updateData: (updatedData: T) => Promise<T>;
  deleteData: (id: number) => Promise<void>;
}
