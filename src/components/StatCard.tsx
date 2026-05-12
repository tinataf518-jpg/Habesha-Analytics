import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Stat } from '../types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  const isUp = stat.trend === 'up';
  const isDown = stat.trend === 'down';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative Gradient Accent */}
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-5 blur-2xl transition-opacity duration-300 group-hover:opacity-10",
        isUp ? "bg-emerald-500" : isDown ? "bg-rose-500" : "bg-slate-500"
      )} />

      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {stat.label}
        </span>
        <div className={cn(
          "flex items-center gap-0.5 px-2 py-1 rounded-full text-xs font-semibold",
          isUp ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400" :
          isDown ? "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400" :
          "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
        )}>
          {isUp ? <ArrowUpRight className="w-3 h-3" /> :
           isDown ? <ArrowDownRight className="w-3 h-3" /> :
           <Minus className="w-3 h-3" />}
          {stat.change}
        </div>
      </div>

      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          {stat.value}
        </h3>
      </div>
      
      {/* Visual Indicator of trend below value */}
      <div className="mt-4 h-1 w-full bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
          className={cn(
            "h-full rounded-full opacity-60",
            isUp ? "bg-emerald-500" : isDown ? "bg-rose-500" : "bg-slate-400"
          )}
        />
      </div>
    </motion.div>
  );
}
