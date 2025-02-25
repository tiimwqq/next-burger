import { Product } from "@prisma/client";
import { axiosInstance } from "./instance"
import { ApiRoutes } from "./constans";

export const search = async (query: string): Promise<Product[]> => {
    const { data } = await axiosInstance.get<Product[]>(ApiRoutes.PRODUCTS_SEARCH, { params: { query } });
    return data
}