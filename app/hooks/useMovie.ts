import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useMovie = (movieId?: string) => {
  const { data, error, isLoading, mutate } = useSWR(
    movieId ? `/api/movies/${movieId}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return {
    movieData: data,
    movieError: error,
    movieIsLoading: isLoading,
    movieMutate: mutate,
  };
};

export default useMovie;
