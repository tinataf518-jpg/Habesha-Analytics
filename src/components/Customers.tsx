import { motion } from 'motion/react';
import { Search, UserPlus, Filter, MoreHorizontal, Mail, Phone, MapPin } from 'lucide-react';
import { MOCK_USERS } from '../types';
import { cn } from '../lib/utils';

export default function Customers() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Customers</h1>
          <p className="text-slate-500 dark:text-slate-400">View and manage all customer accounts and activity.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all font-medium">
          <UserPlus className="w-4 h-4" />
          Add Customer
        </button>
      </header>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by name, email or company..." 
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" />
            Status: Active
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
            Role: All
          </button>
        </div>
      </div>

      {/* Customer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_USERS.map((user, idx) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img src={user.avatar} className="w-14 h-14 rounded-2xl object-cover ring-4 ring-slate-50 dark:ring-slate-800" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{user.name}</h3>
                  <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">{user.role}</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg group-hover:text-slate-900 transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Mail className="w-4 h-4" />
                {user.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <Phone className="w-4 h-4" />
                +251 {Math.floor(Math.random() * 900) + 100} {Math.floor(Math.random() * 9000) + 1000}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="w-4 h-4" />
                {['Addis Ababa, Bole', 'Addis Ababa, Kazanchis', 'Addis Ababa, Piazza', 'Dire Dawa', 'Bahir Dar'][idx % 5]}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
              <span className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                user.status === 'active' ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400" : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              )}>
                {user.status}
              </span>
              <span className="text-xs text-slate-400 font-medium italic">Active {user.lastActive}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
