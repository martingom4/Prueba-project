import { useEffect, useState } from "react";

const phrases = ["Innovación", "Velocidad", "Conectividad", "Futuro"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: "url('src/images/ImageFondo.jpeg')",

      }}
    >
      {/* Overlay oscuro + degradado */}
      <div className="absolute inset-0 bg-primary-red/10 backdrop-blur-xs"></div>

      {/* Contenido principal */}
      <div className="relative z-10 bg-black/30 backdrop-blur-sm p-8 rounded-xl">
        <h1
          className="text-5xl font-bold mb-4 transition-opacity duration-500"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {phrases[index]}
        </h1>
        <p className="text-xl mb-6">
          Soluciones inteligentes para un futuro mejor.
        </p>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
          Explorar
        </button>
      </div>


    </section>
  );
}
