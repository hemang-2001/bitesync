import React, { useState } from 'react';
import { Search as SearchIcon, SlidersHorizontal } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { mockRecipes } from '@/data/mockData';
import RecipeCard from '@/components/RecipeCard';

const Search = () => {
  const [query, setQuery] = useState('');
  
  const filteredRecipes = mockRecipes.filter(r => 
    r.title.toLowerCase().includes(query.toLowerCase()) ||
    r.ingredients.some(i => i.name.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="px-4 py-6 space-y-6 pb-20">
      <div className="space-y-4 sticky top-0 bg-background/95 backdrop-blur-sm z-10 pb-4 pt-2">
        <h2 className="font-serif text-3xl font-bold">Discover</h2>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search recipes, ingredients..." 
              className="pl-10 bg-secondary/30 border-transparent focus:bg-background h-12 rounded-xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl border-border bg-background">
            <SlidersHorizontal size={20} />
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["Under 30 min", "Vegetarian", "Gluten Free", "High Protein"].map((f, i) => (
            <div key={i} className="whitespace-nowrap px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:bg-secondary/50 cursor-pointer transition-colors">
              {f}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold">
            {query ? `Results for "${query}"` : "Recommended for you"}
          </h3>
          <span className="text-xs text-muted-foreground">{filteredRecipes.length} found</span>
        </div>

        <div className="grid gap-6">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No recipes found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
