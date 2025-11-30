import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PlusSquare, User, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mockUser } from '@/data/mockData';
import Logo from '@/components/Logo';

const Layout = ({ children }) => {
  const location = useLocation();

  const NavItem = ({ to, icon: Icon, label }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={cn(
          "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200",
          isActive ? "text-primary" : "text-muted-foreground hover:text-primary/70"
        )}
      >
        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">{label}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto shadow-2xl border-x border-border relative overflow-hidden">
      {/* Desktop/Tablet Warning (Prototype is mobile-first) */}
      <div className="hidden lg:flex fixed left-10 top-1/2 -translate-y-1/2 flex-col max-w-xs text-muted-foreground">
        <Logo className="mb-4" textClassName="text-3xl" />
        <h2 className="text-2xl font-serif text-foreground mb-4">Prototype</h2>
        <p>This prototype is designed with a mobile-first approach. For the best experience, please view on a mobile device or narrow your browser window.</p>
      </div>

      {/* Top Navigation (Logo) */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="w-8 h-8 rounded-full bg-secondary/50 overflow-hidden border border-border">
           <img src={mockUser.avatar} alt="User" className="w-full h-full object-cover" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20 scrollbar-hide">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border h-16 max-w-md mx-auto">
        <div className="grid grid-cols-4 h-full">
          <NavItem to="/" icon={Home} label="Feed" />
          <NavItem to="/search" icon={Search} label="Search" />
          <NavItem to="/add" icon={PlusSquare} label="Create" />
          <NavItem to="/profile" icon={User} label="Profile" />
        </div>
      </nav>
    </div>
  );
};

export default Layout;
