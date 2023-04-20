import { MovieLists } from "./components/MovieLists";
import Billboard from "./components/Billboard";
import Navbar from "./components/Navbar/Page";
import InfoModal from "./components/InfoModal";
import useInfoModal from "./hooks/useInfoModalStore";
import ClientOnly from "./components/ClientOnly";
import ModalContainer from "./components/ModalContainer";

export default async function Home() {
  return (
    <>
      <ClientOnly>
        <ModalContainer />
      </ClientOnly>
      <Navbar />
      <Billboard />
      <MovieLists />
    </>
  );
}
