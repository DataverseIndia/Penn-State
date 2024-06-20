import { InferRequestType, InferResponseType } from 'hono';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '@/lib/api';
import { showToast } from '@/helpers/showToasts';

type ResponseType = InferResponseType<typeof client.admins.register.$post>;
type RequestType = InferRequestType<typeof client.admins.register.$post>[];

export const useCreateAccount = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<ResponseType, Error, RequestType>({
        mutationFn: async json => {
            const response = await client.admins.register.$post({ json });
            return await response.json();
        },
        onSuccess: () => {
            showToast('Account created', true);
            queryClient.invalidateQueries({ queryKey: ['accounts'] });
        },
        onError: () => {
            showToast('Failed to create account', false);
        },
    });

    return mutation;
};
