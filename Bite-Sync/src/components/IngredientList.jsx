import React from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const IngredientList = ({ ingredients }) => {
  const handleOrder = () => {
    // Mock order functionality
    const query = ingredients.map(i => i.name).join(',');
    window.open(`https://www.swiggy.com/instamart`, '_blank');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-bold">Ingredients</h3>
        <span className="text-xs text-muted-foreground">{ingredients.length} items</span>
      </div>
      
      <div className="space-y-3">
        {ingredients.map((ing, idx) => (
          <div key={idx} className="flex items-center space-x-3 p-3 rounded-xl bg-secondary/30 border border-transparent hover:border-secondary transition-colors">
            <Checkbox id={`ing-${idx}`} className="data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
            <label 
              htmlFor={`ing-${idx}`} 
              className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex justify-between"
            >
              <span className="text-foreground">{ing.name}</span>
              <span className="text-muted-foreground font-normal">{ing.amount}</span>
            </label>
          </div>
        ))}
      </div>

      <Button 
        onClick={handleOrder}
        className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 h-12 rounded-xl text-base font-semibold"
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Order Ingredients
      </Button>
      <p className="text-center text-xs text-muted-foreground mt-2">
        Powered by Instamart & Blinkit
      </p>
    </div>
  );
};

export default IngredientList;
