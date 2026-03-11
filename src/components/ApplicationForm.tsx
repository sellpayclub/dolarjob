import React, { useState } from 'react';
import { Logo } from './Logo';
import { Lock, ArrowRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const questions = [
  {
    id: 'country',
    question: '¿En qué país vives ahorita?',
    options: ['México', 'Colombia', 'Argentina', 'Chile', 'Perú', 'Venezuela', 'Otro país de América Latina']
  },
  {
    id: 'age',
    question: '¿Cuántos años tienes?',
    options: ['18 a 24 años', '25 a 34 años', '35 a 44 años', '45 años o más']
  },
  {
    id: 'status',
    question: '¿Cómo está tu situación laboral ahorita?',
    options: ['Trabajo de planta / empleado formal', 'Trabajo por mi cuenta / independiente', 'Estoy desempleado/a', 'Soy estudiante']
  },
  {
    id: 'income',
    question: '¿Más o menos cuánto ganas al mes ahorita?',
    options: ['Menos de $300 USD', 'Entre $300 y $600 USD', 'Entre $600 y $1,000 USD', 'Más de $1,000 USD']
  },
  {
    id: 'device',
    question: '¿Tienes celular o computadora con internet?',
    options: ['Sí, tengo celular con internet', 'Sí, tengo computadora con internet', 'Tengo los dos', 'No tengo acceso estable']
  },
  {
    id: 'hours',
    question: '¿Cuántas horas al día le podrías echar al trabajo online?',
    options: ['Menos de 1 hora', 'Entre 1 y 2 horas', 'Entre 2 y 4 horas', 'Más de 4 horas']
  },
  {
    id: 'experience',
    question: '¿Ya has trabajado online antes o sería tu primera vez?',
    options: ['Nunca he trabajado online', 'Lo intenté pero no me funcionó', 'Ya tengo experiencia trabajando online', 'Ahorita ya trabajo online']
  },
  {
    id: 'english',
    question: '¿Hablas inglés?',
    options: ['No, para nada', 'Entiendo tantito pero no hablo', 'Hablo pero con dificultad', 'Sí hablo bien']
  },
  {
    id: 'goal',
    question: '¿Cuánto necesitarías ganar al mes para cambiar tu situación?',
    options: ['Entre $300 y $500 USD', 'Entre $500 y $1,000 USD', 'Entre $1,000 y $2,000 USD', 'Más de $2,000 USD']
  },
  {
    id: 'reason',
    question: '¿Por qué quieres trabajar para empresas de afuera? (opcional)',
    type: 'text',
    maxLength: 200
  },
  {
    id: 'name',
    question: '¿Cuál es tu nombre?',
    type: 'short_text',
    placeholder: 'Tu nombre o apodo'
  },
  {
    id: 'contact',
    question: 'Para terminar, ¿por dónde debemos entrar en contacto contigo si eres aprobado?',
    type: 'short_text',
    placeholder: 'Tu correo electrónico o número de WhatsApp'
  }
];

export function ApplicationForm({ onComplete }: { onComplete: (name: string) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [textValue, setTextValue] = useState('');

  const currentQ = questions[currentIndex];
  const progress = Math.round(((currentIndex) / questions.length) * 100);

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [currentQ.id]: option });
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 300);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnswers = { ...answers, [currentQ.id]: textValue };
    setAnswers(newAnswers);
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTextValue('');
    } else {
      onComplete(newAnswers['name'] || 'Candidato');
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevQ = questions[currentIndex - 1];
      if (prevQ.type === 'text' || prevQ.type === 'short_text') {
        setTextValue(answers[prevQ.id] || '');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 py-4 px-4">
        <div className="max-w-2xl mx-auto flex justify-center">
          <Logo />
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-8 flex flex-col">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2 text-sm font-medium text-slate-500">
            <span>Paso {currentIndex + 1} de {questions.length} — Información Personal</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center relative">
          {currentIndex > 0 && (
            <button 
              onClick={goBack}
              className="absolute -top-4 left-0 text-slate-400 hover:text-slate-600 flex items-center gap-1 text-sm font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Atrás
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                {currentQ.question}
              </h2>

              {currentQ.type === 'text' || currentQ.type === 'short_text' ? (
                <form onSubmit={handleTextSubmit} className="space-y-6">
                  <div>
                    {currentQ.type === 'text' ? (
                      <textarea
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        maxLength={currentQ.maxLength}
                        rows={4}
                        className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none text-slate-700 text-lg"
                        placeholder="Escribe tu respuesta aquí..."
                      ></textarea>
                    ) : (
                      <input
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        required={currentQ.id !== 'reason'}
                        className="w-full p-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none text-slate-700 text-lg"
                        placeholder={currentQ.placeholder}
                      />
                    )}
                    {currentQ.maxLength && (
                      <div className="text-right text-xs text-slate-400 mt-1">
                        {textValue.length}/{currentQ.maxLength}
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all shadow-md"
                    >
                      {currentIndex === questions.length - 1 ? 'ENVIAR MI SOLICITUD' : 'SIGUIENTE'} <ArrowRight className="w-5 h-5" />
                    </button>
                    {currentIndex === questions.length - 1 && (
                      <div className="text-center">
                        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mb-1">
                          <Lock className="w-3.5 h-3.5" /> Tus datos están protegidos. No compartimos tu información con nadie.
                        </p>
                        <p className="text-xs text-slate-400">
                          Vas a ver el resultado de tu evaluación en la siguiente página.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              ) : (
                <div className="space-y-3">
                  {currentQ.options?.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => handleOptionSelect(option)}
                      className="w-full text-left p-4 rounded-xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 font-medium text-lg transition-all"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
