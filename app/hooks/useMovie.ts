import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useMovie = (movieId?: string) => {
  console.log("🚀 ~ file: useMovie.ts:5 ~ useMovie ~ movieId:", movieId);
  const { data, error, isLoading, mutate } = useSWR(
    `/api/movies/${movieId}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log("🚀 ~ file: useMovie.ts:6 ~ useMovie ~ data:", data);

  return {
    movieData: data,
    movieError: error,
    movieIsLoading: isLoading,
    movieMutate: mutate,
  };
};

export default useMovie;
