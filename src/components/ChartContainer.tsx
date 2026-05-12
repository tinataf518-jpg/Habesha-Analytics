import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import { REVENUE_DATA } from '../types';

interface ChartContainerProps {
  isDarkMode: boolean;
}

export default function ChartContainer({ isDarkMode }: ChartContainerProps) {
  const gridColor = isDarkMode ? '#1e293b' : '#f1f5f9';
  const tickColor = isDarkMode ? '#64748b' : '#94a3b8';
  const tooltipBg = isDarkMode ? '#0f172a' : '#ffffff';
  const tooltipBorder = isDarkMode ? '#1e293b' : '#f1f5f9';
  const barDimColor = isDarkMode ? '#1e293b' : '#e2e8f0';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
      {/* Revenue Over Time (Area Chart) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Revenue Growth</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Monthly recurring breakdown</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              Direct
            </span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-200" />
              Referral
            </span>
          </div>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: tickColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: tickColor, fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  borderRadius: '12px', 
                  border: `1px solid ${tooltipBorder}`,
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  color: isDarkMode ? '#f1f5f9' : '#0f172a'
                }}
                itemStyle={{ color: isDarkMode ? '#f1f5f9' : '#0f172a' }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#6366f1" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
                animationBegin={800}
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Monthly Conversions (Bar Chart) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">User Acquisition</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">New active users by month</p>
          </div>
          <select className="text-xs font-semibold bg-slate-50 dark:bg-slate-800 border-none rounded-lg px-3 py-1.5 text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-indigo-500/20">
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={REVENUE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: tickColor, fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: tickColor, fontSize: 12 }}
              />
              <Tooltip 
                cursor={{ fill: isDarkMode ? '#1e293b' : '#f8fafc' }}
                contentStyle={{ 
                  backgroundColor: tooltipBg, 
                  borderRadius: '12px', 
                  border: `1px solid ${tooltipBorder}`,
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  color: isDarkMode ? '#f1f5f9' : '#0f172a'
                }}
                itemStyle={{ color: isDarkMode ? '#f1f5f9' : '#0f172a' }}
              />
              <Bar 
                dataKey="users" 
                radius={[4, 4, 0, 0]}
                animationBegin={1000}
                animationDuration={1500}
              >
                {REVENUE_DATA.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === REVENUE_DATA.length - 1 ? '#6366f1' : barDimColor} 
                    className="hover:fill-indigo-400 transition-colors duration-300"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
