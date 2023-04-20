"use client";

import useSwr from "swr";
import fetcher from "../libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/current", fetcher);
  return {
    currentUserData: data,
    currentUserError: error,
    currentUserIsLoading: isLoading,
    currentUserMutate: mutate,
  };
};

export default useCurrentUser;
