import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useMovies = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    moviesData: data,
    moviesError: error,
    moviesIsLoading: isLoading,
    moviesMutate: mutate,
  };
};

export default useMovies;
