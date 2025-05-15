import React from "react";
import Navbar from "../components/Navbar";
import bgContact from "../assets/cart.jpg";
import Input from "../components/Input";

function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-cover bg-center">
      <header className="w-full">
        <Navbar />
      </header>

      <main className="flex flex-col items-center justify-center w-full px-[10%] py-12">
        {/* Judul Halaman */}
        <header className="py-10">
          <h1 className="text-5xl font-extrabold text-cyan-950 text-center">
            Contact Us
          </h1>
        </header>

        {/* Konten Utama */}
        <section className="flex flex-col md:flex-row w-full items-center justify-between gap-10">
          {/* Gambar */}
          <figure
            className="w-full md:w-1/2 h-[500px] bg-cover bg-center rounded-md"
            style={{ backgroundImage: `url(${bgContact})` }}
            aria-hidden="true"
          >
            {/* Jika ingin pakai alt, bisa pakai <img> di sini */}
          </figure>

          {/* Formulir Kontak */}
          <article className="flex flex-col gap-10 w-full md:w-1/2">
            <form className="flex flex-col gap-10 w-full">
              <Input
                label="Nama"
                name="nama"
                value=""
                placeholder="Input your name"
              />

              <Input
                label="Email"
                name="email"
                value=""
                placeholder="Input your mail"
              />

              <Input
                label="Pesan"
                name="message"
                value=""
                placeholder="Input your message"
              />

              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full md:w-[50%] h-[50px] bg-cyan-800 rounded hover:bg-cyan-950 hover:text-white"
                >
                  Get Started
                </button>
              </div>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}

export default ContactPage;
