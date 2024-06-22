import { client } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetPublications = () => {
    const query = useQuery({
        queryKey: ['publications'],
        queryFn: async () => {
            const response = await client.publications["get-publications"].$get();

            if (!response.ok) {
                throw new Error('Failed to fetch acounts');
            }

            const { publications } = await response.json();
            return publications;
        },
    });
    return query;
};
