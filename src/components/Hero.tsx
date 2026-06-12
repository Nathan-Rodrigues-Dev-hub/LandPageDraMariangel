function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 px-4 pb-16 pt-14 md:px-6 md:pt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
            Especialista em Restauração Capilar
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Implante capilar com precisão médica e resultado natural
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-700 md:text-lg">
            A Dra. Mariangel oferece tratamentos personalizados para recuperar autoestima, densidade capilar e
            confiança com técnicas modernas e acompanhamento humanizado.
          </p>
          <a
            href="#contato"
            className="mt-8 inline-flex items-center rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          >
            Agendar avaliação
          </a>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-xl shadow-slate-200">
          <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-slate-300 bg-slate-100/80">
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-500 md:text-base">
              Placeholder para foto profissional da Dra. Mariangel
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
