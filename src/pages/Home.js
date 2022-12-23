import { useQuery } from "@tanstack/react-query";
//import { Axios } from "axios";
export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .catch((err) => {
        // Handle errors
        console.error(err);
      });
  });
  if (isError) return <h1>Error</h1>;
  if (isLoading) return "Loading...";
  return (
    <h1>
      This Is The Homepage <p>{catData?.fact}</p>
      <button onClick={refetch}>refetch data</button>
    </h1>
  );
};
