import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/helpers/show-toasts";
import { client } from "@/lib/api";

type ResponseType = InferResponseType<(typeof client.news)["delete-news"][":id"]["$delete"]>;

export const useDeleteNews = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.news["delete-news"][":id"]["$delete"]({ param: { id } });
      return await response.json();
    },
    onSuccess: (data) => {
      if(data.success === true) {
         showToast(data.message, true);
         queryClient.invalidateQueries({ queryKey: ["news", { id }] });
         queryClient.invalidateQueries({ queryKey: ["news"] });
      } else {
         showToast(data.message, false);
      }
    },
    onError: (error) => {
      showToast(`Failed to delete news: ${error.message}`, false);
    },
  });

  return mutation;
};
