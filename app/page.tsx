import { SignoutBtn } from "./components/SignoutBtn";
import TextControl from "./components/TextControl";
import getCurrentUser from "./libs/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log("🚀 ~ file: layout.tsx:27 ~ currentUser:", currentUser);

  return (
    <>
      <TextControl classNames="text-green-400 4xl" type="h1">
        NewFlix
      </TextControl>
      <TextControl classNames="text-green-400 4xl" type="p">
        Logged in as {currentUser?.name}
      </TextControl>
      {currentUser && <SignoutBtn />}
    </>
  );
}
