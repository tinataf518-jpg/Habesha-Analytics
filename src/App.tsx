/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ChartContainer from './components/ChartContainer';
import UserTable from './components/UserTable';
import Settings from './components/Settings';
import Analytics from './components/Analytics';
import Customers from './components/Customers';
import Billing from './components/Billing';
import { MOCK_STATS } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Users } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  // Toggle dark mode by adding/removing 'dark' class from html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const renderContent = (isDark: boolean) => {
    switch (activeTab) {
      case 'overview':
        return (
          <motion.div
            key="overview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Page Title Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight">Workspace Overview</h1>
              <p className="text-slate-500 dark:text-slate-400">Welcome back, Abebe. Here's what's happening in your workspace today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {MOCK_STATS.map((stat, idx) => (
                <StatCard key={stat.id} stat={stat} index={idx} />
              ))}
            </div>

            {/* Charts Section */}
            <ChartContainer isDarkMode={isDark} />

            {/* Data Table Section */}
            <UserTable />
          </motion.div>
        );
      case 'analytics':
        return (
          <motion.div
            key="analytics"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Analytics />
          </motion.div>
        );
      case 'customers':
        return (
          <motion.div
            key="customers"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Customers />
          </motion.div>
        );
      case 'billing':
        return (
          <motion.div
            key="billing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Billing />
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div
            key="settings"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Settings />
          </motion.div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Section Not Found</h2>
            <button 
              onClick={() => setActiveTab('overview')}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl shadow-lg"
            >
              Back to Overview
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex font-sans antialiased text-slate-900 dark:text-slate-100 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-500">
      {isLoggedIn ? (
        <>
          {/* Navigation Sidebar */}
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Container */}
          <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
            <Header 
              isDarkMode={isDarkMode} 
              setIsDarkMode={setIsDarkMode} 
              setIsLoggedIn={setIsLoggedIn} 
              setActiveTab={setActiveTab}
            />
            
            {/* Scrollable Content Area */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">
              <AnimatePresence mode="wait">
                {renderContent(isDarkMode)}
              </AnimatePresence>

              {/* Footer Branding */}
              <footer className="mt-12 py-8 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-xs font-medium text-slate-400 tracking-widest uppercase">
                  Powered by Ethiopian Tech Hub © 2026
                </p>
              </footer>
            </main>
          </div>
        </>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl text-center"
          >
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center mb-6 mx-auto">
              {authMode === 'login' ? <Lock className="w-10 h-10 text-indigo-600" /> : <Users className="w-10 h-10 text-indigo-600" />}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {authMode === 'login' ? 'Habesha Analytics' : 'Join Habesha'}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              {authMode === 'login' 
                ? 'Secure access to your data. Please sign in to continue.' 
                : 'Start your journey with Ethiopia\'s most advanced analytics tool.'}
            </p>
            
            <div className="space-y-4">
              <div className="space-y-4 text-left">
                {authMode === 'signup' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input type="text" placeholder="Abebe Bikila" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all outline-none" />
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-transparent dark:border-slate-700 rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/20 text-slate-900 dark:text-slate-100 transition-all outline-none" />
                </div>
              </div>

              <button 
                onClick={() => setIsLoggedIn(true)}
                className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all scale-100 active:scale-95 flex items-center justify-center gap-3 mt-4"
              >
                {authMode === 'login' ? 'Sign In' : 'Create Account'}
              </button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100 dark:border-slate-800"></div></div>
                <div className="relative flex justify-center text-xs font-medium uppercase"><span className="bg-white dark:bg-slate-900 px-4 text-slate-400">Or continue with</span></div>
              </div>

              <button 
                onClick={() => setIsLoggedIn(true)}
                className="w-full py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                Google
              </button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              {authMode === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
              <button 
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
                className="ml-2 text-indigo-600 font-bold hover:underline"
              >
                {authMode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

