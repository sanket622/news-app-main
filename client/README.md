# Live News App

A React application that fetches and displays live news data with a clean, mobile-responsive interface built with Tailwind CSS.

## Features

- Fixed navigation bar with mobile hamburger menu
- Responsive grid layout (1 column on mobile, 2 columns on desktop)
- Mobile-first responsive design
- Smooth animations and hover effects
- Loading spinner with animations
- Live news data fetching with fallback mock data
- Clean, modern UI design with Tailwind CSS

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   cd news-app
   npm install
   ```

2. **Get a News API Key** (Optional for live data):
   - Visit [NewsAPI.org](https://newsapi.org/)
   - Sign up for a free account
   - Get your API key
   - Replace `YOUR_API_KEY_HERE` in `src/components/NewsList.js`

3. **Start the Development Server**:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   - Navigate to `http://localhost:3000`

## Mobile Responsiveness

The app is built with mobile-first design using Tailwind CSS:

- **Mobile (< 768px)**: Single column layout, hamburger menu, optimized touch targets
- **Tablet (768px - 1024px)**: Two column grid, expanded navigation
- **Desktop (> 1024px)**: Full navigation bar, optimized spacing

### Responsive Breakpoints:
- `xs`: 475px
- `sm`: 640px  
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Responsive navigation component
│   ├── NewsCard.js        # Mobile-optimized news article component
│   └── NewsList.js        # Responsive news feed with grid layout
├── App.js                 # Main app component
├── index.css              # Tailwind CSS imports
└── index.js               # App entry point
tailwind.config.js         # Tailwind CSS configuration
postcss.config.js          # PostCSS configuration
```

## Tailwind CSS Features Used

- **Responsive Grid**: `grid-cols-1 md:grid-cols-2`
- **Mobile Navigation**: Hidden/shown based on screen size
- **Flexible Spacing**: Responsive padding and margins
- **Hover Effects**: Smooth transitions and transforms
- **Loading Animation**: CSS-only spinning loader

## Notes

- The app includes mock data that displays when the API is not configured
- Fully responsive design works on all device sizes
- Touch-friendly interface for mobile devices
- Smooth animations and micro-interactions
- The navbar is fixed at the top with mobile hamburger menu
- Grid layout automatically adjusts based on screen size