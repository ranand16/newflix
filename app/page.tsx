import { SignoutBtn } from "./components/SignoutBtn";
import getCurrentUser from "./libs/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log("🚀 ~ file: layout.tsx:27 ~ currentUser:", currentUser);

  return (
    <>
      <h1 className="text-green-400 4xl">Newflix</h1>
      <p className="text-white">
        Logged in as {currentUser?.curtrentUser.name}
      </p>
      {currentUser && <SignoutBtn />}
    </>
  );
}
