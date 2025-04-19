import { axiosInstance } from "./instance";
import { ApiRoutes } from "./constans";
import { RollType } from "@prisma/client";

export const getAllRollTypes = async (): Promise<RollType[]> => {
    const { data } = await axiosInstance.get<RollType[]>(ApiRoutes.ROLLTYPES);
    return data
}