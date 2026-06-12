import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contato" className="bg-slate-50 px-4 py-16 md:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Contato</h2>
          <p className="mt-3 text-slate-700">
            Agende sua avaliação e conheça o plano ideal para o seu caso.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700 md:text-base">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" aria-hidden="true" />
              Clínica Dra. Mariangel · São Paulo - SP
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-700" aria-hidden="true" />
              (11) 99999-0000
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Atendimento com excelência</h3>
          <p className="mt-2 text-sm text-slate-700">
            Clique no botão de WhatsApp para conversar com a equipe e receber orientações iniciais.
          </p>
          <a
            href="https://wa.me/5511999990000?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o."
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
