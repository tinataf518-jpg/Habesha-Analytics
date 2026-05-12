import { motion } from 'motion/react';
import { User, Bell, Shield, Wallet, Globe, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Settings() {
  const sections = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'billing', label: 'Billing', icon: Wallet },
    { id: 'integrations', label: 'Integrations', icon: Globe },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto"
    >
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 transition-colors">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400 transition-colors">Manage your account settings and preferences.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Settings Navigation */}
        <aside className="space-y-1">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  section.id === 'profile' 
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                )}
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </button>
            );
          })}
        </aside>

        {/* Settings Content */}
        <div className="space-y-6">
          {/* Profile Section */}
          <section className="p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm transition-colors duration-300">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-6">Personal Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">First Name</label>
                  <input type="text" defaultValue="Abebe" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Name</label>
                  <input type="text" defaultValue="Bikila" className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input type="email" defaultValue="abebe@ethio-analytics.et" className="w-full pl-11 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Biography</label>
                <textarea rows={4} defaultValue="Tech Entrepreneur living in Addis Ababa. Building the future of data in Ethiopia." className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all resize-none" />
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors">Cancel</button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-600/20 transition-all">Save Changes</button>
            </div>
          </section>

          {/* Account Deletion */}
          <section className="p-6 bg-rose-50/30 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20 rounded-2xl transition-colors duration-300">
            <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-400 mb-2">Delete Account</h3>
            <p className="text-sm text-rose-700/70 dark:text-rose-400/60 mb-6">Permanently remove your account and all associated data. This action cannot be undone.</p>
            <button className="px-4 py-2 text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all shadow-lg shadow-rose-600/20">Delete Account</button>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
