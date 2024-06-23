import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/api";
import { showToast } from "@/helpers/show-toasts";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type ResponseType = InferResponseType<typeof client.admins.register.$post>;
type RequestType = {
  name: string;
  email: string;
  password: string;
};

export const useCreateAccount = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.admins.register.$post({ json });
      return await response.json();
    },
    onSuccess: (data) => {
      showToast(data.message, true);
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      if(data.success === true) {
        Cookies.set('dr_das_research_lab_registration_cookie', data.token!);
        navigate('/admin/verify-registration');
      }
    },
    onError: () => {
      showToast("Failed to create account", false);
    },
  });

  return mutation;
};
