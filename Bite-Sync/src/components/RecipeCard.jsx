import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const RecipeCard = ({ recipe }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(recipe.likes);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <Link to={`/recipe/${recipe.id}`} className="block group">
      <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
          
          {/* Overlay Info */}
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
            <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
              <Clock size={12} />
              <span>{recipe.time}</span>
            </div>
            <button 
              onClick={handleLike}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors active:scale-90"
            >
              <Heart 
                size={20} 
                className={cn("transition-colors", liked ? "fill-red-500 text-red-500" : "text-white")} 
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-lg font-bold leading-tight text-foreground line-clamp-2 flex-1 mr-2">
              {recipe.title}
            </h3>
            <Badge variant="secondary" className="shrink-0 text-[10px] font-normal bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {recipe.difficulty}
            </Badge>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {recipe.description}
          </p>

          <div className="pt-2 flex items-center justify-between border-t border-border/50 mt-3">
            <div className="flex items-center gap-2">
              <img src={recipe.author.avatar} alt={recipe.author.name} className="w-6 h-6 rounded-full object-cover" />
              <span className="text-xs text-muted-foreground font-medium">{recipe.author.name}</span>
            </div>
            <span className="text-xs text-muted-foreground font-medium">
              {likesCount.toLocaleString()} likes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
