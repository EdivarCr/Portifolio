import { useState, useEffect } from "react";


const frases = [
  "Desenvolvo soluções para problemas reais.",
  "Transformo ideias em produtos digitais.",
  "Construo aplicações web e APIs."
];

function Hero() {

  const [fraseAtual, setFraseAtual] = useState(0);
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    let timeout;

    const intervalo = setInterval(() => {
      setVisivel(false);

      timeout = setTimeout(() => {
        setFraseAtual((atual) => (atual + 1) % frases.length);
        setVisivel(true);
      }, 500);

    }, 4500);

    return () => {
      clearInterval(intervalo);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <section
        id="home"
        className="min-h-[calc(100dvh-120px)] flex flex-col"
      >
        <div className="flex-1 flex flex-col justify-center px-8 items-center text-center">

          <h1 className="text-2xl">
            Olá, sou Edivar.
          </h1>
          <div className="text-5xl min-h-24 flex items-center">
            <p className={`
    text-5xl
    transition-all duration-500 ease-in-out
    ${visivel
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
              }
  `}>
              {frases[fraseAtual]}
            </p>
          </div>

        </div>

        {/* Informações inferiores */}
        <div className="flex justify-between items-center px-8 py-6">

          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Contato:</p>

            <div className="flex gap-6">
              <a href="mailto:seu@email.com">Email</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>

          <p>Brasil</p>

        </div>
      </section>
    </>
  );
}

export default Hero;