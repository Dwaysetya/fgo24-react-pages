import React from "react";
import aboutImage1 from "../assets/blue1.jpg";
import aboutImage2 from "../assets/blue2.jpg";
import Navbar from "../components/Navbar";

function Aboute() {
  return (
    <div className="w-full min-h-screen bg-white">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center w-full px-[10%] py-12">
        <header className="py-10">
          <h1 className="text-5xl font-extrabold text-cyan-950 text-center mb-10">
            About Me
          </h1>
        </header>
        <section
          aria-labelledby="tentang-kami-1"
          className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen gap-10 mb-20"
        >
          <figure
            className="w-full md:w-1/2 h-[800px] bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${aboutImage1})` }}
            aria-hidden="true"
          ></figure>

          <article className="w-full md:w-1/2 text-cyan-900 text-lg leading-relaxed">
            <h2 id="tentang-kami-1" className="sr-only">
              Aboute Me
            </h2>
            <p>
              We are a creative agency that combines design, technology, and
              marketing strategy to create impactful visual solutions. With a
              spirit of collaboration, we deliver work that is not only
              aesthetic but also meaningful.
            </p>
          </article>
        </section>

        <section
          aria-labelledby="tentang-kami-2"
          className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-screen gap-10"
        >
          <article className="w-full md:w-1/2 text-cyan-900 text-lg leading-relaxed">
            <h2 id="tentang-kami-2" className="sr-only">
              Design Philosophy
            </h2>
            <p>
              In every project, we focus on deeply understanding the client’s
              needs in order to authentically tell their brand story. We believe
              that good design can create emotional connections and strengthen
              identity.
            </p>
          </article>

          <figure
            className="w-full md:w-1/2 h-[800px] bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${aboutImage2})` }}
            aria-hidden="true"
          ></figure>
        </section>
      </main>
    </div>
  );
}

export default Aboute;
