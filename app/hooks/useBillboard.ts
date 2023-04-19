import useSWR from "swr";
import fetcher from "../libs/fetcher";

const useBillboard = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/random", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    billboardData: data,
    billboardError: error,
    billboardIsLoading: isLoading,
    billboardMutate: mutate,
  };
};

export default useBillboard;
