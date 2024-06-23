import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/helpers/show-toasts";
import { client } from "@/lib/api";
import { OutputData } from "@editorjs/editorjs";

type ResponseType = InferResponseType<(typeof client.news)["add-news"]["$post"]>;
type RequestType = {
   content: OutputData,
   imageUrl: string
};

export const useCreateNews = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.news["add-news"].$post({json});
      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      if (data.success === true) {
        showToast(data.message, true);
      } else {
        showToast(data.message, false);
      }
    },
    onError: (error) => {
      showToast(error.message, false);
    },
  });

  return mutation;
};
