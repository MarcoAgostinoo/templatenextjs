import Image from "next/image";


import MainHome from "./pages/home/page";
import Testes from "./pages/teste/page";

export default function Home() {
  return (
    <div>
      <MainHome />
      <Testes />
    </div>
  );
}
