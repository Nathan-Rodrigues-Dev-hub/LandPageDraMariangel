function About() {
  return (
    <section id="sobre" className="bg-blue-950 px-4 py-16 md:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Sobre a Dra. Mariangel</h2>
          <p className="mt-4 text-blue-100">
            Médica dedicada à cirurgia de implante capilar, com foco em técnicas de alta precisão e atendimento
            individualizado. Atua com protocolos modernos para oferecer segurança, naturalidade e acompanhamento
            completo no pré e pós-operatório.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-blue-50 md:text-base">
            <li>• Mais de 10 anos de experiência em tratamentos capilares.</li>
            <li>• Formação e atualização contínua em transplante capilar e tricologia.</li>
            <li>• Abordagem humanizada para resultados estéticos e funcionais.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-800 bg-blue-900/40 p-6">
          <div className="aspect-[4/5] rounded-xl border-2 border-dashed border-blue-400/70">
            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-blue-100 md:text-base">
              Placeholder para foto da médica e credenciais
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
