import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "@/components/Navbar";


const Home: NextPage = () => {
  return (
    <>
      <div
        className="w-full m-0 p-0 bg-cover bg-bottom "
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2020/09/23/19/58/halloween-5596921__340.jpg')",
          height: "60vh",
          maxHeight: "460px",
        }}
      >
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <p className="text-white font-extrabold text-3xl md:text-5xl">
            Next Js Starterpack
          </p>
          <p className="text-xl md:text-2xl text-gray-500">
            by ridho
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
