import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  "Verificando tu ubicación...",
  "Revisando tu disponibilidad de tiempo...",
  "Confirmando acceso a dispositivos...",
  "Buscando vacantes disponibles en tu región...",
  "Evaluando compatibilidad con el programa..."
];

export function Analyzing({ userName, onComplete }: { userName: string, onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let step = -1;
    const interval = setInterval(() => {
      step++;
      if (step < steps.length) {
        setCurrentStep(step);
      } else {
        clearInterval(interval);
        setIsDone(true);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 800); // 800ms per step * 5 steps = 4 seconds total

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-white">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-700">
        <div className="flex justify-center mb-8">
          <Logo className="text-white [&_span]:text-white [&_.text-emerald-600]:text-emerald-400" />
        </div>

        <div className="text-center mb-8">
          {isDone ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-4"
            >
              <CheckCircle2 className="w-8 h-8" />
            </motion.div>
          ) : (
            <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
          )}
          <h2 className="text-2xl font-bold">
            {isDone ? "¡Análisis completado!" : `Analizando el perfil de ${userName}...`}
          </h2>
          {isDone && (
            <p className="text-slate-400 mt-2">Redirigiendo a tu resultado...</p>
          )}
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep || isDone;
            
            return (
              <div 
                key={index} 
                className={`flex items-center gap-3 transition-opacity duration-300 ${isCompleted || isActive ? 'opacity-100' : 'opacity-0'}`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : isActive ? (
                  <Loader2 className="w-5 h-5 text-emerald-500 animate-spin shrink-0" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-slate-600 shrink-0" />
                )}
                <span className={`${isCompleted ? 'text-slate-300' : isActive ? 'text-white font-medium' : 'text-slate-500'}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
