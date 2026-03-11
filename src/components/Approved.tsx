import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { CheckCircle2, MapPin, Smartphone, Clock, Globe2 } from 'lucide-react';

export function Approved({ userName }: { userName: string }) {
  const [videoSrc, setVideoSrc] = useState<string>("about:blank");

  useEffect(() => {
    // Inject ConverteAI SDK
    const scriptId = 'converteai-sdk';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      s.async = true;
      document.head.appendChild(s);
    }

    // Calculate video source URL
    const src = 'https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69b1d217243e791f07268b5a/v4/embed.html' 
      + (window.location.search || '?') 
      + '&vl=' + encodeURIComponent(window.location.href);
    
    setVideoSrc(src);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <header className="bg-white border-b border-slate-200 py-4 px-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-center">
          <Logo />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-6">
            Paso Final
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            🎉 ¡Qué chido, {userName}! Tu perfil fue <span className="text-emerald-600">APROBADO</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Cumples con todos los requisitos para acceder a la Certificación Global de Teletrabajo y empezar a aplicar a vacantes internacionales esta semana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 text-lg border-b border-slate-100 pb-2">Así quedó tu evaluación:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Ubicación</p>
                  <p className="text-sm text-slate-600">Elegible para vacantes en tu región <CheckCircle2 className="inline w-4 h-4 text-emerald-500" /></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Dispositivo</p>
                  <p className="text-sm text-slate-600">Compatible con la plataforma <CheckCircle2 className="inline w-4 h-4 text-emerald-500" /></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Disponibilidad</p>
                  <p className="text-sm text-slate-600">Suficiente para generar ingresos <CheckCircle2 className="inline w-4 h-4 text-emerald-500" /></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-slate-900">Perfil latino</p>
                  <p className="text-sm text-slate-600">Alta demanda por empresas <CheckCircle2 className="inline w-4 h-4 text-emerald-500" /></p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100">
                <p className="text-xs text-emerald-800 font-semibold uppercase tracking-wider mb-1">Vacantes disponibles</p>
                <p className="text-3xl font-black text-emerald-600">47</p>
                <p className="text-xs text-emerald-700 mt-1">para tu perfil esta semana</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-slate-900 rounded-2xl p-1 shadow-xl overflow-hidden flex flex-col">
            <div className="p-6 text-center pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ahorita mira el video de abajo para completar tu inscripción
              </h2>
              <p className="text-amber-400 text-sm font-medium">
                (Es importante que lo veas completo — tiene las instrucciones para activar tu acceso)
              </p>
            </div>
            
            {/* Video Player */}
            <div className="flex justify-center w-full bg-black rounded-xl overflow-hidden border border-slate-800 p-4">
              <div id="ifr_69b1d217243e791f07268b5a_wrapper" style={{ margin: '0 auto', width: '100%', maxWidth: '400px' }}>
                <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_69b1d217243e791f07268b5a_aspect">
                  <iframe 
                    frameBorder="0" 
                    allowFullScreen 
                    src={videoSrc} 
                    id="ifr_69b1d217243e791f07268b5a" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    referrerPolicy="origin" 
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
