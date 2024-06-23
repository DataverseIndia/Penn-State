import { client } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetMembers = () => {
    const query = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const response = await client.member["get-members"].$get();
            if (!response.ok) {
                throw new Error('Failed to fetch acounts');
            }
            const { success, members } = await response.json();
            if (success === true) {
                return members;
            }
        },
    });
    return query;
};
