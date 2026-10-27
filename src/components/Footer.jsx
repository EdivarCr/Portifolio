function Footer() {
    return (
        <footer
            id="contact"
            className="bg-zinc-950 text-zinc-100 px-8 py-16"
        >
            <div className="
        max-w-7xl mx-auto
        min-h-[420px]
        flex flex-col justify-between
        gap-20
      ">

                {/* Apresentação */}
                <div className="lg:ml-[25%]">
                    <div className="w-8 h-8 bg-white rounded-full mb-6" />

                    <h2 className="
            text-4xl md:text-6xl
            font-normal
            tracking-tight leading-tight
            max-w-3xl
          ">
                        Vamos transformar ideias em
                        soluções reais?
                    </h2>
                </div>

                {/* Contatos */}
                <div className="
          grid grid-cols-1 md:grid-cols-3
          gap-8 lg:ml-[25%]
        ">

                    <div>
                        <a
                            href="mailto:seuemail@exemplo.com"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            Entre em contato ↗
                        </a>

                        <p className="text-zinc-400 mt-1">
                            seuemail@exemplo.com
                        </p>
                    </div>

                    <div>
                        <a
                            href="https://www.linkedin.com/in/seu-perfil/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-300 transition-colors"
                        >
                            LinkedIn ↗
                        </a>

                        <p className="text-zinc-400 mt-1">
                            Meu perfil
                        </p>
                    </div>

                    <p className="text-zinc-400 md:text-right">
                        © {new Date().getFullYear()}
                    </p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;