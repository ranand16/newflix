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
      <MovieList data={} title={""} />
    </>
  );
}
