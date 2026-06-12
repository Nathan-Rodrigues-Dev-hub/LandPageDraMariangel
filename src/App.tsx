import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 px-4 py-6 text-center text-sm text-slate-500 md:px-6">
        © {new Date().getFullYear()} Dra. Mariangel. Todos os direitos reservados.
      </footer>
      <WhatsAppButton
        phoneNumber="5511999990000"
        message="Olá, quero saber mais sobre implante capilar."
      />
    </div>
  )
}

export default App
