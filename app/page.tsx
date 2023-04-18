import axios from "axios";
import Billboard from "./components/Billboard";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar/Page";
import getCurrentUser from "./libs/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log("🚀 ~ file: layout.tsx:27 ~ currentUser:", currentUser);

  return (
    <>
      <Navbar />
      <Billboard />
      <MovieList title={"Trending Now"} apiRoute="/api/movies" />
      <MovieList title={"My List"} apiRoute="/api/favorite" />
    </>
  );
}
