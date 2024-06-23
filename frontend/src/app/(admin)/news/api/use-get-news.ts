import { client } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useGetNews = () => {
    const query = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const response = await client.news["get-news"].$get();
            if (!response.ok) {
                throw new Error('Failed to fetch acounts');
            }
            const { success, news } = await response.json();
            if (success === true) {
                return news;
            }
        },
    });
    return query;
};
