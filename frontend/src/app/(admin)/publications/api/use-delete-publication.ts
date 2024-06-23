import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/helpers/showToasts";
import { client } from "@/lib/api";

type ResponseType = InferResponseType<(typeof client.publications)["delete-publications"][":id"]["$delete"]>;

export const useDeletePublication = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async (json) => {
      const response = await client.publications["delete-publications"][":id"]["$delete"]({ param: { id } });
      return await response.json();
    },
    onSuccess: (data) => {
      if (data.success === true) {
        showToast(data.message, true);
        queryClient.invalidateQueries({ queryKey: ["publication", { id }] });
        queryClient.invalidateQueries({ queryKey: ["publications"] });
      } else {
        showToast(data.message, false)
      }
    },
    onError: (error) => {
      showToast(`Failed to delete publication: ${error.message}`, false);
    },
  });

  return mutation;
};
