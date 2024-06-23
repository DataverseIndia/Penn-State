import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showToast } from "@/helpers/show-toasts";
import { client } from "@/lib/api";

type ResponseType = InferResponseType<(typeof client.member)["delete-members"][":id"]["$delete"]>;

export const useDeleteMember = (id: string) => {
  console.log(id)
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.member["delete-members"][":id"]["$delete"]({ param: { id } });
      return await response.json();
    },
    onSuccess: (data) => {
      if(data.success === true) {
         showToast(data.message, true);
         queryClient.invalidateQueries({ queryKey: ["member", { id }] });
         queryClient.invalidateQueries({ queryKey: ["members"] });
      } else {
         showToast(data.message, false);
      }
    },
    onError: (error) => {
      showToast(`Failed to delete member: ${error.message}`, false);
    },
  });

  return mutation;
};
