import { motion } from 'motion/react';
import { CreditCard, Check, Settings, History, Download } from 'lucide-react';
import { PLANS, INVOICES } from '../types';
import { cn } from '../lib/utils';

export default function Billing() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Billing & Subscription</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your subscription, payment methods and billing history.</p>
      </header>

      {/* Plan Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "p-8 rounded-3xl border-2 transition-all relative overflow-hidden",
              plan.current 
                ? "bg-white dark:bg-slate-900 border-indigo-600 shadow-xl shadow-indigo-500/10 scale-105 z-10" 
                : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800"
            )}
          >
            {plan.current && (
              <div className="absolute top-0 right-0 py-1.5 px-4 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                Current Plan
              </div>
            )}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-slate-100">{plan.price}</span>
              <span className="text-slate-500 font-medium">/month</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={cn(
              "w-full py-3 rounded-2xl font-bold transition-all",
              plan.current 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30" 
                : "bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-100"
            )}>
              {plan.current ? 'Manage Plan' : 'Select Plan'}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        {/* Billing History */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <History className="w-5 h-5 text-indigo-500" />
              Invoice History
            </h3>
            <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Download All</button>
          </div>

          <div className="space-y-4">
            {INVOICES.map(invoice => (
              <div key={invoice.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-slate-100">{invoice.id}</div>
                    <div className="text-xs text-slate-500">{invoice.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <div className="font-bold text-slate-900 dark:text-slate-100">{invoice.amount}</div>
                    <div className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider font-mono">{invoice.status}</div>
                  </div>
                  <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-white dark:hover:bg-slate-700 rounded-lg shadow-sm">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="p-6 bg-indigo-600 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-indigo-600/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="flex justify-between items-start mb-12">
              <div className="italic font-bold tracking-widest opacity-80">VIZA</div>
              <CreditCard className="w-8 h-8 opacity-60" />
            </div>
            <div className="text-xl font-mono tracking-[4px] mb-8">•••• •••• •••• 4242</div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-[10px] uppercase opacity-60 font-bold mb-1">Card Holder</div>
                <div className="text-sm font-bold tracking-wider uppercase">Alex Thompson</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase opacity-60 font-bold mb-1">Expires</div>
                <div className="text-sm font-bold tracking-wider">12/28</div>
              </div>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-dashed border-slate-200 dark:border-slate-800 text-slate-500 hover:text-indigo-600 hover:border-indigo-600 transition-all font-semibold">
            <Check className="w-4 h-4" />
            Add New Method
          </button>
        </motion.div>
      </div>
    </div>
  );
}
