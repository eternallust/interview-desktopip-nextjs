import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { UseFilmsResponse } from "@/types/FilmType";

export function useFilms(): UseFilmsResponse {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}films`,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
}
