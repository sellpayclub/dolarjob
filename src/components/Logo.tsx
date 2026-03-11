import { DollarSign } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 font-bold text-xl tracking-tight text-slate-900 ${className}`}>
      <div className="bg-emerald-500 text-white p-1 rounded-md">
        <DollarSign size={20} strokeWidth={3} />
      </div>
      <span>Dolar<span className="text-emerald-600">Job</span></span>
    </div>
  );
}
