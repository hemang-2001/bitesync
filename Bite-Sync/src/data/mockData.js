export const mockRecipes = [
  {
    id: 1,
    title: "Rustic Roasted Tomato Basil Soup",
    description: "A comforting, velvety soup made with vine-ripened tomatoes, fresh basil, and a hint of cream. Perfect for chilly evenings.",
    image: "https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    likes: 1240,
    time: "45 min",
    difficulty: "Easy",
    ingredients: [
      { name: "Roma Tomatoes", amount: "1 kg" },
      { name: "Fresh Basil", amount: "1 bunch" },
      { name: "Garlic Cloves", amount: "4" },
      { name: "Heavy Cream", amount: "1/2 cup" },
      { name: "Vegetable Broth", amount: "500ml" },
      { name: "Olive Oil", amount: "3 tbsp" }
    ],
    steps: [
      "Preheat oven to 400°F (200°C). Halve tomatoes and place on baking sheet.",
      "Drizzle with olive oil, salt, and pepper. Roast for 30-40 minutes.",
      "Sauté garlic in a pot until fragrant.",
      "Add roasted tomatoes and broth. Simmer for 20 minutes.",
      "Blend until smooth, stir in cream and basil. Serve hot."
    ],
    comments: [
      { user: "Mark T.", text: "Made this last night, absolutely delicious!" },
      { user: "Sarah J.", text: "Can I substitute cream with coconut milk?" }
    ]
  },
  {
    id: 2,
    title: "Avocado & Poached Egg Toast",
    description: "The ultimate brunch staple. Creamy avocado on sourdough topped with a perfectly poached egg and chili flakes.",
    image: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Liam Chen",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    likes: 856,
    time: "15 min",
    difficulty: "Medium",
    ingredients: [
      { name: "Sourdough Bread", amount: "2 slices" },
      { name: "Ripe Avocado", amount: "1" },
      { name: "Eggs", amount: "2" },
      { name: "Chili Flakes", amount: "1 tsp" },
      { name: "Lemon Juice", amount: "1 tsp" }
    ],
    steps: [
      "Toast the sourdough slices until golden brown.",
      "Mash avocado with lemon juice, salt, and pepper.",
      "Poach eggs in simmering water for 3-4 minutes.",
      "Spread avocado on toast, top with egg, and sprinkle chili flakes."
    ],
    comments: [
      { user: "Jessica W.", text: "My go-to breakfast!" }
    ]
  },
  {
    id: 3,
    title: "Lemon Herb Grilled Salmon",
    description: "Fresh Atlantic salmon marinated in zesty lemon and herbs, grilled to perfection. Healthy and flavorful.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "Sophia Miller",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    likes: 2103,
    time: "25 min",
    difficulty: "Medium",
    ingredients: [
      { name: "Salmon Fillet", amount: "2" },
      { name: "Lemon", amount: "1" },
      { name: "Fresh Dill", amount: "2 sprigs" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Asparagus", amount: "1 bunch" }
    ],
    steps: [
      "Mix melted butter, lemon juice, and chopped dill.",
      "Brush salmon with mixture and season with salt.",
      "Grill salmon for 4-5 minutes per side.",
      "Serve with grilled asparagus and lemon wedges."
    ],
    comments: []
  },
  {
    id: 4,
    title: "Decadent Chocolate Lava Cake",
    description: "A rich chocolate cake with a molten center that flows out when you cut into it. A dessert lover's dream.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    likes: 3420,
    time: "30 min",
    difficulty: "Hard",
    ingredients: [
      { name: "Dark Chocolate", amount: "100g" },
      { name: "Butter", amount: "100g" },
      { name: "Eggs", amount: "2" },
      { name: "Sugar", amount: "1/2 cup" },
      { name: "Flour", amount: "2 tbsp" }
    ],
    steps: [
      "Melt chocolate and butter together.",
      "Whisk eggs and sugar until pale.",
      "Fold in chocolate mixture and flour.",
      "Pour into ramekins and bake at 400°F for 12 minutes.",
      "Invert onto plates and serve immediately."
    ],
    comments: [
      { user: "Chocoholic99", text: "Best recipe ever!" }
    ]
  }
];

export const mockUser = {
  name: "Hemang B.",
  handle: "@Hemang_B",
  avatar: "https://avatars.githubusercontent.com/u/69377228?v=4",
  bio: "Home cook enthusiast. Lover of spicy food and sweet treats.",
  followers: 1205,
  following: 450,
  recipes: [1, 2] // IDs of recipes owned by user
};
