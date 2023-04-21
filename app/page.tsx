import { MovieLists } from "./components/MovieLists";
import Billboard from "./components/Billboard";
import Navbar from "./components/Navbar/Page";
import ModalContainer from "./components/ModalContainer";
import ClientComponentOnly from "./components/ClientComponentOnly";

export default async function Home() {
  return (
    <>
      <ClientComponentOnly>
        <ModalContainer />
        <Navbar />
        <Billboard />
        <MovieLists />
      </ClientComponentOnly>
    </>
  );
}
