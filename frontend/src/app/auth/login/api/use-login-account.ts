import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/api";
import { showToast } from "@/helpers/showToasts";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type ResponseType = InferResponseType<typeof client.admins.login.$post>;
type RequestType = {
  email: string;
  password: string;
};

export const useLoginAccount = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.admins.login.$post({ json });
      return await response.json();
    },
    onSuccess: (data) => {
      showToast(data.message, true);
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      if(data.success === true) {
        Cookies.set('dr_das_research_lab_login_cookie', data.token!);
        navigate('/admin/dashboard')
      }
    },
    onError: () => {
      showToast("Failed to login", false);
    },
  });

  return mutation;
};
