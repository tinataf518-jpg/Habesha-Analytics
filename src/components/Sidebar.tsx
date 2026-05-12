import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Users, 
  Settings, 
  LayoutDashboard, 
  CreditCard, 
  Bell, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  Zap,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile sidebar on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const SidebarContent = () => (
    <div className="flex flex-col h-full py-6 dark:bg-slate-900 transition-colors duration-300">
      {/* Logo */}
      <div className={cn(
        "px-6 mb-10 flex items-center gap-3 transition-all duration-300",
        !isOpen && "px-4 justify-center"
      )}>
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-500/20">
          <Zap className="w-5 h-5 fill-current" />
        </div>
        {isOpen && (
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100 overflow-hidden whitespace-nowrap">
            Habesha <span className="text-indigo-600">Analytics</span>
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                isActive 
                  ? "bg-slate-100/80 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-medium" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110",
                isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300"
              )} />
              {isOpen && (
                <span className="text-sm tracking-wide overflow-hidden whitespace-nowrap">
                  {item.label}
                </span>
              )}
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 w-1 h-6 bg-indigo-600 dark:bg-indigo-400 rounded-r-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Items */}
      <div className="px-3 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-1">
        <button className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200",
          !isOpen && "justify-center"
        )}>
          <HelpCircle className="w-5 h-5 shrink-0" />
          {isOpen && <span className="text-sm">Support</span>}
        </button>
        
        {/* Toggle Collapse */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "hidden lg:flex w-full items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-200 mt-2",
            !isOpen && "justify-center"
          )}
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          {isOpen && <span className="text-sm">Collapse Sidebar</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Handle */}
      <button 
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md lg:hidden border border-slate-100 dark:border-slate-800"
      >
        <Menu className="w-6 h-6 text-slate-600 dark:text-slate-400" />
      </button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-72 bg-white dark:bg-slate-900 z-[60] shadow-2xl lg:hidden overflow-hidden"
            >
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900"
              >
                <X className="w-6 h-6" />
              </button>
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden lg:block sticky top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-800 transition-all duration-300 ease-in-out shrink-0",
          isOpen ? "w-64" : "w-20"
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
