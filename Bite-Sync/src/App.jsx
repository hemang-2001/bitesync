import React, { useState, useEffect } from 'react';
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/Layout";
import SplashScreen from "@/components/SplashScreen";

// Pages
import Home from "@/pages/Home";
import RecipeDetail from "@/pages/RecipeDetail";
import AddRecipe from "@/pages/AddRecipe";
import Profile from "@/pages/Profile";
import Search from "@/pages/Search";
import Auth from "@/pages/Auth";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App font-sans text-foreground bg-background min-h-screen">
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Auth Route (No Layout) */}
          <Route path="/auth" element={<Auth />} />

          {/* Main App Routes (With Layout) */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/search" element={<Layout><Search /></Layout>} />
          <Route path="/add" element={<Layout><AddRecipe /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          
          {/* Detail Route */}
          <Route path="/recipe/:id" element={<Layout><RecipeDetail /></Layout>} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
