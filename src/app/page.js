import Image from "next/image";
import MainHome from "./pages/home/page";
import Testes from "./pages/teste/page";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <div>
      <MainHome />
      <Hero />
      <Testes />
    </div>
  );
}
