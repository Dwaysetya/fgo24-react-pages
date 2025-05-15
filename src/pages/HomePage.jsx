import { Link } from "react-router-dom";
import React from "react";
import bgImage from "../assets/flat.jpg";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <header className="w-full">
        <Navbar />
      </header>

      <main className="flex flex-col justify-center items-center w-full min-h-screen gap-10">
        <section className="text-center">
          <h1 className="text-6xl font-sans font-extrabold text-white">
            CREATIVE DESIGN
          </h1>
        </section>
        <section className="w-[45%] flex flex-col gap-10">
          <p className="text-white text-center">
            We are a creative agency that combines strong visual design, sharp
            strategy, and cutting-edge technology to build authentic and
            memorable brand identities. We believe that every idea deserves to
            be brought to life in a big way.
          </p>
          <p className="text-white text-center">
            With a collaborative approach and innovative mindset, we are here to
            help your business grow and stand out from the competition.
            Together, let's create something extraordinary.
          </p>
        </section>
        <section className="w-[30%]">
          <button className="w-full h-[50px] bg-white rounded hover:bg-cyan-950 hover:text-white">
            Get started
          </button>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
