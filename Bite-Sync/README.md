# BiteSync - Social Recipe Sharing App

BiteSync is a modern, mobile-first social recipe sharing application prototype. It allows users to discover recipes, share their culinary creations, and order ingredients directly through integrated services.

## 🚀 Features

- **Social Feed**: Discover trending recipes with a beautiful, Instagram-style feed.
- **Recipe Details**: Step-by-step cooking instructions and dynamic ingredient lists.
- **Ingredient Ordering**: One-click integration to order ingredients via Instacart/Blinkit (Mock).
- **User Profiles**: Showcase your recipes, bio, and follower stats.
- **Smart Search**: Filter recipes by ingredients, time, or dietary preferences.
- **Interactive UI**: Like, comment, and save recipes with smooth micro-interactions.
- **Dark Mode Support**: Fully themed design system supporting light and dark modes.

## 🛠️ Tech Stack

- **Frontend Framework**: React.js (v18)
- **Styling**: Tailwind CSS + Shadcn UI
- **Icons**: Lucide React
- **Routing**: React Router DOM v6
- **State Management**: React Hooks (Context/Local State)
- **Build Tool**: CRA (Create React App) / Craco

## 🎨 Design System

The application follows a **"Burnt Orange & Sage"** theme, designed to stimulate appetite while maintaining a clean, modern aesthetic.

- **Primary Color**: Burnt Orange (`hsl(16 85% 39%)`)
- **Secondary Color**: Sage Green (`hsl(83 40% 90%)`)
- **Typography**: 
  - Headings: *Playfair Display* (Serif)
  - Body: *Inter* (Sans-serif)
- **Design Principles**: Mobile-first, Content-aware layouts, Accessible contrast ratios.

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Yarn package manager

### Step 1: Clone the Repository
```bash
git clone <https://github.com/hemang-2001/bitesync>
cd bitesync/frontend
```

### Step 2: Install Dependencies
```bash
yarn install
```

### Step 3: Environment Configuration
Create a `.env` file in the `frontend` directory (if not already present):
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Step 4: Run the Application
```bash
yarn start
```
The app will be available at `http://localhost:3000`.

### Step 5: Build for Production
```bash
yarn build
```

## 📂 Project Structure

```
/src
  ├── /components      # Reusable UI components
  │   ├── /ui          # Shadcn UI primitives (Button, Input, etc.)
  │   ├── Layout.jsx   # Main app shell with navigation
  │   ├── RecipeCard.jsx
  │   └── ...
  ├── /data            # Mock data for prototype
  ├── /lib             # Utilities (Tailwind merge, etc.)
  ├── /pages           # Page components (Home, Profile, etc.)
  ├── App.js           # Main entry point with Routing
  └── index.css        # Global styles & Design Tokens
```

## 🧪 Testing

This project includes a test suite setup.
```bash
# Run tests
yarn test
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/Feature`)
3. Commit your changes (`git commit -m 'Add some Feature'`)
4. Push to the branch (`git push origin feature/Feature`)
5. Open a Pull Request

---
*Built with ❤️ by Hemang Bairwa*
