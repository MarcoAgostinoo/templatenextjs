import Image from "next/image";
import MainHome from "./pages/home/page";
import Testes from "./pages/teste/page";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <div>
      <MainHome />
      <Hero />
      <Testes />
    </div>
  );
}
