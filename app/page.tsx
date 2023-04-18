import { MovieLists } from "./components/MovieLists";
import Billboard from "./components/Billboard";
import Navbar from "./components/Navbar/Page";

export default async function Home() {
  return (
    <>
      <Navbar />
      <Billboard />
      <MovieLists />
    </>
  );
}
