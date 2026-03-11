import { Logo } from './Logo';
import { CheckCircle2, Star, Clock, MapPin, Briefcase, DollarSign, Smartphone, Home, Zap, ChevronRight } from 'lucide-react';

export function Landing({ onApply }: { onApply: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 text-center flex justify-center items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Vacante Activa · Publicada hace 2 días · Cierra el viernes
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <div className="hidden sm:flex items-center gap-1 text-sm text-slate-500 font-medium">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-slate-700">4.8/5</span>
            <span className="mx-1">·</span>
            <span>+12,400 certificados</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Gana hasta $200 al día trabajando desde casa para empresas estadounidenses.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Empresas de Estados Unidos y Europa están pagando entre <strong className="text-slate-800">$30 y $200 dólares</strong> por tareas simples que cualquier persona puede hacer desde casa — y están buscando latinos para hacerlas.
          </p>
        </div>

        {/* Job Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
                <Briefcase className="w-3.5 h-3.5" />
                100% Remoto
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold">
                <DollarSign className="w-3.5 h-3.5" />
                Pago en USD
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Por tarea completada
              </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Asistente de Tareas Digitales — Trabajo Remoto
            </h2>

            <div className="space-y-8">
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Sobre esta vacante</h3>
                <p className="text-slate-600 mb-4">
                  DolarJob está reclutando asistentes digitales en América Latina para ejecutar micro-tareas para empresas de Estados Unidos y Europa.
                </p>
                <p className="text-slate-600">
                  No se requiere experiencia previa. El trabajo es sencillo, flexible y se realiza completamente desde casa, usando tu celular o computadora.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Las tareas incluyen:</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Digitación y captura de datos',
                    'Soporte básico de atención al cliente',
                    'Revisión y corrección de documentos',
                    'Traducción asistida por IA',
                    'Moderación de contenido',
                    'Transcripción de audio'
                  ].map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Lo que ofrecemos:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-700"><DollarSign className="w-5 h-5 text-emerald-600" /> Pago de $30 a $200 USD por tarea completada</li>
                  <li className="flex items-center gap-3 text-slate-700"><Clock className="w-5 h-5 text-blue-600" /> Horario 100% flexible — trabajas cuando quieras</li>
                  <li className="flex items-center gap-3 text-slate-700"><Smartphone className="w-5 h-5 text-purple-600" /> Solo necesitas celular o computadora con internet</li>
                  <li className="flex items-center gap-3 text-slate-700"><Home className="w-5 h-5 text-orange-600" /> Trabajo desde casa, sin salir</li>
                  <li className="flex items-center gap-3 text-slate-700"><Zap className="w-5 h-5 text-amber-500" /> Primeras tareas disponibles en 48 horas</li>
                  <li className="flex items-center gap-3 text-slate-700 font-semibold"><DollarSign className="w-5 h-5 text-emerald-600" /> Potencial de $2,000 USD mensuales</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Requisitos:</h3>
                <ul className="space-y-2">
                  {[
                    'Vivir en América Latina',
                    'Tener celular o computadora con internet',
                    'Disponibilidad mínima de 2 horas al día',
                    'No se requiere inglés',
                    'No se requiere experiencia previa'
                  ].map((req, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-slate-900 p-6 sm:p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">📋 ¿Te interesa esta vacante?</h3>
            <p className="text-slate-300 mb-6 text-sm">
              Para aplicar, primero necesitamos verificar que cumples con los requisitos básicos.
            </p>
            <button 
              onClick={onApply}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              QUIERO APLICAR A ESTA VACANTE
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-slate-400 text-xs mt-4">
              El proceso de verificación tarda menos de 2 minutos.
            </p>
          </div>
        </div>

        {/* About & Testimonials */}
        <div className="space-y-8 mb-12">
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Sobre DolarJob:</h3>
            <p className="text-slate-600 mb-3">
              Somos una plataforma de empleo remoto especializada en conectar talento latino con empresas de Estados Unidos y Europa que necesitan asistentes digitales.
            </p>
            <p className="text-slate-600 mb-3">
              Operamos desde 2021 y hemos certificado a más de 12,000 trabajadores en México, Colombia, Argentina, Perú y Venezuela.
            </p>
            <p className="text-slate-600">
              Nuestros clientes son empresas reales con presupuesto real — y contratan exclusivamente a través de nuestra plataforma certificada.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Lo que dicen nuestros trabajadores:</h3>
            <div className="space-y-4">
              {[
                {
                  text: "Completé mi primera tarea el segundo día. Me pagaron $45 dólares directo a mi cuenta. No lo podía creer.",
                  author: "Karla M.",
                  location: "Guadalajara, México",
                  role: "Asistente Digital"
                },
                {
                  text: "Llevo 3 meses y ya estoy ganando más que en mi trabajo de oficina. Y sin salir de mi casa.",
                  author: "Rodrigo T.",
                  location: "Monterrey, México",
                  role: "Asistente Digital"
                },
                {
                  text: "Lo mejor es que no necesito inglés. La IA hace la traducción y yo solo ejecuto.",
                  author: "Daniela F.",
                  location: "CDMX, México",
                  role: "Asistente Digital"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-slate-700 italic mb-3">"{testimonial.text}"</p>
                  <div className="text-sm">
                    <span className="font-bold text-slate-900">{testimonial.author}</span>
                    <span className="text-slate-500"> · {testimonial.location} · {testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 text-sm text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Vacante publicada por DolarJob · Empleo Remoto Internacional</span>
          </div>
          <div className="flex justify-center items-center gap-2 mb-6 text-xs">
            <span className="text-emerald-400">🟢 Estado: Activa</span>
            <span>·</span>
            <span>Publicada: hace 2 días</span>
            <span>·</span>
            <span>Expira: viernes</span>
          </div>
          <p className="mb-2">© 2026 DolarJob · Todos los derechos reservados</p>
          <p className="text-xs opacity-60">Los resultados varían según dedicación y esfuerzo de cada persona.</p>
        </div>
      </footer>
    </div>
  );
}
