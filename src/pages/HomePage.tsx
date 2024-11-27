import { TypeAnimation } from "react-type-animation";
import gambarProfile from "../assets/images/profile.webp";
import { motion } from "motion/react";

const HomePage = () => {
  console.log(import.meta.env.VITE_BASE_URL);
  return (
    <main className="dark:text-gray-50">
      <section className="min-h-svh dark:bg-gray-950 flex justify-center items-center flex-col gap-5">
        <img
          // src={`${import.meta.env.VITE_BASE_URL}assets/images/profile.webp`}
          src={gambarProfile}
          alt=""
          className="w-52 rounded-full"
        />
        <TypeAnimation
          sequence={[
            "Hello, I'm Rizky👋",
            2000,
            "Video Editor",
            1000,
            "Photographer",
            1000,
          ]}
          wrapper="h4"
          cursor={true}
          repeat={Infinity}
          className="text-2xl font-bold mb-10 "
        />
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center font-bold text-gray-400 dark:text-gray-300 w-96 sm:w-[700px] lg:w-[800px]">
          Let’s craft a world full of inspiration and innovation together!
        </h1>
      </section>
    </main>
  );
};

export default HomePage;
