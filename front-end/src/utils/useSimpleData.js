import { useQuery } from '@tanstack/react-query';

export const useSimpleData = (queryKey, queryFn) => {
    const query = useQuery({
        queryKey,
        queryFn,
        staleTime: 1000 * 60 * 5, 
        cacheTime: 1000 * 60 * 10
    });

    return {
        data: query.data?.data || [],
        isLoading: query.isLoading,
        isError: query.isError,
        isFetching: query.isFetching,
    };
}