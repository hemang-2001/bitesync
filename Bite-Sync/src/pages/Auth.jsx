import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Logo from '@/components/Logo';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock auth
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1613216514014-edb92d8e3e8d?auto=format&fit=crop&w=1000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />

      <div className="w-full max-w-sm space-y-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="transform -rotate-6 mb-4">
             <div className="relative overflow-hidden rounded-2xl shadow-lg border border-border/50 w-20 h-20 bg-background">
                <img 
                  src="https://images.unsplash.com/photo-1551410224-699683e15636?auto=format&fit=crop&w=200&q=80" 
                  alt="BiteSync Logo" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
          <h1 className="font-serif text-4xl font-bold text-foreground">BiteSync</h1>
          <p className="text-muted-foreground">Join the tastiest community.</p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-xl border border-border/50 space-y-6">
          <div className="flex p-1 bg-secondary/50 rounded-xl">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${isLogin ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${!isLogin ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input placeholder="John Doe" className="bg-secondary/20 border-transparent focus:bg-background" />
              </div>
            )}
            
            <div className="space-y-2">
              <Label>Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="email" placeholder="hello@example.com" className="pl-10 bg-secondary/20 border-transparent focus:bg-background" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input type="password" placeholder="••••••••" className="pl-10 bg-secondary/20 border-transparent focus:bg-background" />
              </div>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold mt-2 group">
              {isLogin ? 'Welcome Back' : 'Create Account'}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Auth;
