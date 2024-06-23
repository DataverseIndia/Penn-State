import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/helpers/showToasts";
import { client } from "@/lib/api";

type ResponseType = InferResponseType<(typeof client.member)["add-members"]["$post"]>;
type RequestType = {
   designation: string,
   name: string,
   email: string,
   description: string,
   imageUrl: string
};

export const useCreateMember = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.member["add-members"].$post({json});
      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["members"] });
      if (data.success === true) {
        showToast(data.message, true);
      } else {
        showToast(data.message, false);
      }
    },
    onError: () => {
      showToast("Failed to create publication", false);
    },
  });

  return mutation;
};
