
const Navibar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full bg-background p-10 flex items-center justify-between">
        <h1 className="text-black text-2xl">Edivar.Dev</h1>
        <nav className="flex items-center space-x-10 pr-10">
          <ul className="flex gap-15">
            <li>
              <a href="#home" className="text-black transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-black transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black transition-colors duration-300">
                Projects
              </a>
            </li>
          </ul>

        </nav>

      </header>
    </>
  )
}

export default Navibar 