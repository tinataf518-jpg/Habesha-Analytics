import { useRef, useEffect, useState } from 'react';
import { Search, Bell, Command, ChevronDown, Moon, Sun, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  setIsLoggedIn: (val: boolean) => void;
  setActiveTab: (val: string) => void;
}

export default function Header({ isDarkMode, setIsDarkMode, setIsLoggedIn, setActiveTab }: HeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 lg:px-8 transition-colors duration-300">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search dashboard... (Press ⌘K)" 
            className="w-full pl-10 pr-12 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-slate-200 dark:placeholder:text-slate-500"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm pointer-events-none">
            <Command className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-[10px] font-bold text-slate-400">K</span>
          </div>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all"
          title="Toggle Dark Mode"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white dark:ring-slate-900" />
        </button>

        <div className="h-6 w-px bg-slate-100 dark:bg-slate-800 mx-1" />

        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1 pl-1.5 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all group"
          >
            <div className="text-right hidden sm:block text-slate-900 dark:text-slate-100">
              <div className="text-xs font-bold leading-none">Abebe Bikila</div>
              <div className="text-[10px] text-slate-500 leading-none mt-1">Founder</div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=100&h=100&fit=crop" 
              alt="User" 
              className="w-8 h-8 rounded-lg object-cover ring-2 ring-white dark:ring-slate-800 group-hover:ring-indigo-50 dark:group-hover:ring-indigo-500/20 transition-all"
            />
            <ChevronDown className={cn("w-4 h-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-transform duration-200", showProfileMenu ? "rotate-180" : "")} />
          </button>

          <AnimatePresence>
            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl py-2 z-50 overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-slate-50 dark:border-slate-800 mb-1">
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Abebe Bikila</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">abebe@habesha.com</div>
                </div>
                
                <button 
                  onClick={() => {
                    setActiveTab('settings');
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 transition-colors"
                >
                  <User className="w-4 h-4 text-indigo-500" />
                  My Profile Settings
                </button>
                
                <div className="border-t border-slate-50 dark:border-slate-800 my-1" />
                
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Log Out
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
