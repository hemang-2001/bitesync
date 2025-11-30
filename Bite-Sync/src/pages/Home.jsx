import React from 'react';
import RecipeCard from '@/components/RecipeCard';
import { mockRecipes } from '@/data/mockData';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const Home = () => {
  const categories = ["All", "Breakfast", "Vegan", "Dessert", "Quick", "Italian", "Asian"];

  return (
    <div className="space-y-6 pb-8">
      {/* Hero / Welcome */}
      <div className="px-4 pt-6">
        <h2 className="font-serif text-3xl font-bold text-foreground">
          What are you <br />
          <span className="text-primary">cooking today?</span>
        </h2>
      </div>

      {/* Categories */}
      <ScrollArea className="w-full whitespace-nowrap pl-4">
        <div className="flex w-max space-x-3 p-1">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                ${i === 0 
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>

      {/* Feed */}
      <div className="px-4 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold">Trending Now</h3>
          <button className="text-xs font-medium text-primary hover:underline">See all</button>
        </div>
        
        <div className="grid gap-6">
          {mockRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
