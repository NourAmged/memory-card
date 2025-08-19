# Memory Card Game

A simple and fun memory card game built with React and Vite. Test your memory by clicking on unique bird cards without repeating any selection!

## [Live Demo](https://memory-card-rho-sandy.vercel.app/)

## Features
- Fetches real bird data from an external API
- Responsive and modern UI
- Score and best score tracking
- Game over and restart functionality
- Loading and error handling states

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/NourAmged/memory-card.git
   cd memory-card
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add your API key:
   ```env
   VITE_API_KEY=your_api_key_here
   ```

### Running the App
Start the development server:
```sh
npm run dev
# or
yarn dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Project Structure
- `src/` - Main source code
  - `components/` - React components
  - `utils/` - Utility functions
- `public/` - Static assets
- `.env` - Environment variables (not committed)

## Customization
- You can change the bird family or API endpoint in `src/components/Main.jsx`.
- Update styles in `src/index.css`.
