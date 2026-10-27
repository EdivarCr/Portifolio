import Navibar from './components/Navibar.tsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Conquist from './components/Conquist.jsx'
import Footer from './components/Footer.jsx'
function App() {
  return (
    <>
      <Navibar />
      <main className="pt-28">
        <Hero />
        <Projects />
        <About />
        <Conquist />
      </main>
      <Footer />
    </>
  )
}

export default App
