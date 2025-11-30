import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark } from 'lucide-react';
import { mockRecipes } from '@/data/mockData';
import IngredientList from '@/components/IngredientList';
import StepList from '@/components/StepList';
import CommentSection from '@/components/CommentSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Mock fetch
    const found = mockRecipes.find(r => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-[40vh] w-full">
        <img src={recipe.image} alt={recipe.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        
        {/* Nav Actions */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white border-none h-10 w-10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={20} />
          </Button>
          <div className="flex gap-2">
            <Button size="icon" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white border-none h-10 w-10">
              <Share2 size={18} />
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 text-white border-none h-10 w-10">
              <Bookmark size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="px-5 -mt-10 relative z-10">
        <div className="bg-card rounded-t-[2.5rem] shadow-xl border-t border-border/50 p-6 space-y-6 min-h-[60vh]">
          
          {/* Title & Meta */}
          <div className="space-y-4 text-center">
            <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-2" />
            <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 mb-2">
              {recipe.difficulty} • {recipe.time}
            </Badge>
            <h1 className="font-serif text-3xl font-bold leading-tight text-foreground">
              {recipe.title}
            </h1>
            
            <div className="flex items-center justify-center gap-2 pt-2">
              <img src={recipe.author.avatar} alt={recipe.author.name} className="w-8 h-8 rounded-full object-cover border border-border" />
              <span className="text-sm font-medium text-muted-foreground">by <span className="text-foreground">{recipe.author.name}</span></span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-center leading-relaxed">
            {recipe.description}
          </p>

          {/* Tabs/Sections */}
          <div className="space-y-8 pt-4">
            <IngredientList ingredients={recipe.ingredients} />
            <StepList steps={recipe.steps} />
            <CommentSection comments={recipe.comments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
