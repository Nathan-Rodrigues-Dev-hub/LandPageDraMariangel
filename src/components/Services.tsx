import type { IconType } from 'react-icons'
import { FaCut, FaEye, FaLeaf, FaUserMd } from 'react-icons/fa'

interface Service {
  title: string
  description: string
  icon: IconType
}

const services: Service[] = [
  {
    title: 'Implante Capilar FUE',
    description: 'Técnica minimamente invasiva com extração individual para recuperação mais confortável.',
    icon: FaUserMd,
  },
  {
    title: 'Implante Capilar FUT',
    description: 'Estratégia eficiente para grandes áreas de cobertura capilar com planejamento personalizado.',
    icon: FaCut,
  },
  {
    title: 'Transplante de Sobrancelhas',
    description: 'Redesenho de sobrancelhas para harmonia facial com resultado natural e delicado.',
    icon: FaEye,
  },
  {
    title: 'Tratamentos Capilares',
    description: 'Protocolos clínicos para fortalecimento, prevenção da queda e manutenção dos resultados.',
    icon: FaLeaf,
  },
]

function Services() {
  return (
    <section id="servicos" className="px-4 py-16 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Serviços</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Procedimentos avançados para diferentes necessidades de restauração capilar, sempre com avaliação médica
          individualizada.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100">
              <service.icon className="text-2xl text-emerald-600" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
