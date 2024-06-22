import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/helpers/showToasts";
import { client } from "@/lib/api";

type ResponseType = InferResponseType<(typeof client.publications)["add-publications"]["$post"]>;
type RequestType = {
  imageUrl?: string;
  year: string;
  publicationNumber: string;
  topic: string;
  title: string;
  authors: string;
};

export const useCreatePublication = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.publications["add-publications"].$post({json});
      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
      if (data.success === true) {
        showToast("Publication created", true);
      } else {
        showToast("Failed to create publication", false);
      }
    },
    onError: () => {
      showToast("Failed to create publication", false);
    },
  });

  return mutation;
};
