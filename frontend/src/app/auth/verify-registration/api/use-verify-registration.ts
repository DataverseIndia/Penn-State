import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/api";
import { showToast } from "@/helpers/show-toasts";
import { useNavigate } from "react-router-dom";

type ResponseType = InferResponseType<typeof client.admins["verify-registration"]["$post"]>;
type RequestType = {
  email: string;
  oneTimePass: string;
};

export const useVerifyRegistration = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.admins["verify-registration"].$post({ json });
      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      if (data.success === true) {
         showToast(data.message, true);
         navigate('/admin/home')
      }
      else {
         showToast(data.message, false);
      }
    },
    onError: () => {
      showToast("Failed to create account", false);
    },
  });

  return mutation;
};
