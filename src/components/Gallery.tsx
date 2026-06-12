interface GalleryItem {
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  { title: 'Caso 1', description: 'Recuperação frontal' },
  { title: 'Caso 2', description: 'Aumento de densidade' },
  { title: 'Caso 3', description: 'Correção de entradas' },
  { title: 'Caso 4', description: 'Sobrancelhas naturais' },
]

function Gallery() {
  return (
    <section id="galeria" className="px-4 py-16 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Galeria de Antes e Depois</h2>
        <p className="mt-3 text-slate-700">Espaço pronto para inserir fotos reais de pacientes com autorização.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="grid grid-cols-2">
                <div className="flex aspect-[3/4] items-center justify-center border-r border-dashed border-slate-300 bg-slate-100 text-xs text-slate-500">
                  Antes
                </div>
                <div className="flex aspect-[3/4] items-center justify-center bg-emerald-50 text-xs text-emerald-700">
                  Depois
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
