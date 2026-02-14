import { useQuery } from "@tanstack/react-query";
import { APPRECIATION_GRADES } from "@/Constant/route";
import api from "@/api/axios";

type AppreciationGradeDetailsResponse = {
  isSuccess: boolean;
  statusCode: number;
  message: string;
  data: Data;
  errors: any;
};

type Data = {
  id: number;
  appreciationId: number;
  minimumScore: number;
  maximumScore: number;
};
export const useGetAppreciationGradeDetails = (id: number) => {
  return useQuery<AppreciationGradeDetailsResponse>({
    queryKey: ["appreciation-grades", id],
    queryFn: async () => {
      const response = await api.get(`/${APPRECIATION_GRADES}/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
