import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <p className="font-bold text-center text-4xl mt-4">Welcome to Paper Magic Supplies!</p>
    </>
  );
}
