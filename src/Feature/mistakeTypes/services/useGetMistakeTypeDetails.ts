import { useQuery } from "@tanstack/react-query";
import { type MistakeTypeDetailsResponse } from "../types/mistakeTypes.types";
import api from "@/api/axios";

export const useGetMistakeTypeDetails = (id: string | undefined) => {
  return useQuery({
    queryKey: ["mistake-type-details", id],
    queryFn: async () => {
      const response = await api.get<MistakeTypeDetailsResponse>(
        `/mistake-types/${id}`,
      );
      return response.data.data;
    },
    enabled: !!id,
  });
};
