import React, { useState } from 'react';
import { Plus, X, Image as ImageIcon, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const AddRecipe = () => {
  const [ingredients, setIngredients] = useState([{ name: '', amount: '' }]);
  const [steps, setSteps] = useState(['']);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = () => setIngredients([...ingredients, { name: '', amount: '' }]);
  const removeIngredient = (index) => setIngredients(ingredients.filter((_, i) => i !== index));
  
  const addStep = () => setSteps([...steps, '']);
  const removeStep = (index) => setSteps(steps.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Recipe created successfully!", {
      description: "Your recipe has been added to your profile."
    });
    // Reset form or redirect
  };

  return (
    <div className="px-4 py-6 pb-24 space-y-6">
      <div className="space-y-2">
        <h2 className="font-serif text-3xl font-bold">Create Recipe</h2>
        <p className="text-muted-foreground">Share your culinary masterpiece with the world.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload */}
        <div className="space-y-2">
          <Label>Recipe Photo</Label>
          <div 
            className="aspect-video rounded-2xl border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center bg-secondary/10 hover:bg-secondary/20 transition-colors cursor-pointer overflow-hidden relative"
            onClick={() => document.getElementById('image-upload').click()}
          >
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-4">
                <div className="bg-background p-3 rounded-full inline-block mb-2 shadow-sm">
                  <ImageIcon className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground font-medium">Click to upload cover image</p>
              </div>
            )}
            <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title</Label>
            <Input id="title" placeholder="e.g. Grandma's Apple Pie" className="bg-background" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Time</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 min</SelectItem>
                  <SelectItem value="30">30 min</SelectItem>
                  <SelectItem value="45">45 min</SelectItem>
                  <SelectItem value="60">1 hr+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Difficulty</Label>
              <Select>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Easy</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="hard">Hard</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" placeholder="Tell us about your dish..." className="bg-background min-h-[100px]" />
          </div>
        </div>

        {/* Ingredients */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-serif">Ingredients</Label>
            <Button type="button" variant="ghost" size="sm" onClick={addIngredient} className="text-primary hover:text-primary/80">
              <Plus size={16} className="mr-1" /> Add Item
            </Button>
          </div>
          <div className="space-y-3">
            {ingredients.map((ing, i) => (
              <div key={i} className="flex gap-2">
                <Input 
                  placeholder="Item (e.g. Flour)" 
                  className="flex-[2] bg-background"
                  value={ing.name}
                  onChange={(e) => {
                    const newIng = [...ingredients];
                    newIng[i].name = e.target.value;
                    setIngredients(newIng);
                  }}
                />
                <Input 
                  placeholder="Qty" 
                  className="flex-1 bg-background"
                  value={ing.amount}
                  onChange={(e) => {
                    const newIng = [...ingredients];
                    newIng[i].amount = e.target.value;
                    setIngredients(newIng);
                  }}
                />
                {ingredients.length > 1 && (
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeIngredient(i)} className="text-muted-foreground hover:text-destructive">
                    <X size={18} />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-lg font-serif">Instructions</Label>
            <Button type="button" variant="ghost" size="sm" onClick={addStep} className="text-primary hover:text-primary/80">
              <Plus size={16} className="mr-1" /> Add Step
            </Button>
          </div>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold mt-2">
                  {i + 1}
                </span>
                <Textarea 
                  placeholder={`Step ${i + 1} details...`} 
                  className="flex-1 bg-background min-h-[80px]"
                  value={step}
                  onChange={(e) => {
                    const newSteps = [...steps];
                    newSteps[i] = e.target.value;
                    setSteps(newSteps);
                  }}
                />
                {steps.length > 1 && (
                  <Button type="button" variant="ghost" size="icon" onClick={() => removeStep(i)} className="text-muted-foreground hover:text-destructive mt-2">
                    <X size={18} />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full h-12 text-lg font-semibold shadow-lg shadow-primary/20">
          Publish Recipe
        </Button>
      </form>
    </div>
  );
};

export default AddRecipe;
