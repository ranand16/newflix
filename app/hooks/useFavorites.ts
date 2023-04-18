import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useFavorites = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorite", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    favData: data,
    favError: error,
    favIsLoading: isLoading,
    favMutate: mutate,
  };
};

export default useFavorites;
