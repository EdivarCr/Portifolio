

function About() {
    return (
        <section
            id="about"
            className="
        min-h-[calc(100dvh-120px)]
        flex flex-col md:flex-row
        items-start
        gap-100
        px-8 py-8
      "
        >
            <img
                src="/images/about.jpg"
                className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <div className="md:w-1/2">
                {/* conteúdo sobre você */}
            </div>

        </section>
    )
}

export default About