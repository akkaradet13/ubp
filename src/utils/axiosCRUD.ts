import { CRUDOperations } from "@/interfaces";
import axiosInstance from "@/utils/axiosInstance";

const createCRUDOperations = <T extends { id: number }>(
  endpoint: string
): CRUDOperations<T> => {
  const createData = async (newData: Omit<T, "id">): Promise<T> => {
    const { data } = await axiosInstance.post(`${endpoint}`, newData);
    return data;
  };

  const readData = async (): Promise<T[]> => {
    const { data } = await axiosInstance.get(`${endpoint}`);
    return data;
  };

  const updateData = async (updatedData: T): Promise<T> => {
    const { data } = await axiosInstance.put(
      `${endpoint}/${updatedData.id}`,
      updatedData
    );
    return data;
  };

  const deleteData = async (id: number): Promise<void> => {
    await axiosInstance.delete(`${endpoint}/${id}`);
  };

  return { createData, readData, updateData, deleteData };
};

export default createCRUDOperations;
