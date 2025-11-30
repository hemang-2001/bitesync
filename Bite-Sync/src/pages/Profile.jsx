import React from 'react';
import { Settings, Grid, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockUser, mockRecipes } from '@/data/mockData';
import RecipeCard from '@/components/RecipeCard';

const Profile = () => {
  const userRecipes = mockRecipes.filter(r => mockUser.recipes.includes(r.id));

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-background px-4 pt-8 pb-6 text-center space-y-4 border-b border-border">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-accent mx-auto">
            <img 
              src={mockUser.avatar} 
              alt={mockUser.name} 
              className="w-full h-full rounded-full object-cover border-4 border-background"
            />
          </div>
          <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8 shadow-sm">
            <Settings size={14} />
          </Button>
        </div>
        
        <div>
          <h2 className="font-serif text-2xl font-bold">{mockUser.name}</h2>
          <p className="text-sm text-muted-foreground font-medium">{mockUser.handle}</p>
        </div>

        <p className="text-sm text-foreground/80 max-w-xs mx-auto leading-relaxed">
          {mockUser.bio}
        </p>

        <div className="flex justify-center gap-8 py-2">
          <div className="text-center">
            <div className="font-bold text-lg">{mockUser.followers}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">{mockUser.following}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Following</div>
          </div>
          <div className="text-center">
            <div className="font-bold text-lg">{userRecipes.length}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Recipes</div>
          </div>
        </div>

        <div className="flex gap-3 justify-center pt-2">
          <Button className="w-32 rounded-full">Follow</Button>
          <Button variant="outline" className="w-32 rounded-full">Message</Button>
        </div>
      </div>

      {/* Content */}
      <Tabs defaultValue="recipes" className="w-full">
        <TabsList className="w-full grid grid-cols-2 bg-transparent border-b border-border rounded-none h-12 p-0">
          <TabsTrigger 
            value="recipes" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none h-full"
          >
            <Grid size={18} className="mr-2" /> Recipes
          </TabsTrigger>
          <TabsTrigger 
            value="saved" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none h-full"
          >
            <Bookmark size={18} className="mr-2" /> Saved
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="recipes" className="p-4 space-y-4 mt-0">
          {userRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </TabsContent>
        
        <TabsContent value="saved" className="p-8 text-center text-muted-foreground mt-0">
          <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bookmark size={24} className="opacity-50" />
          </div>
          <p>No saved recipes yet.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
