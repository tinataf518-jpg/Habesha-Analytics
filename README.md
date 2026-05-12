# Habesha Analytics

A modern SaaS analytics dashboard designed for Ethiopian businesses, featuring real-time data visualization, customer insights, and comprehensive reporting.

## Features

- 📊 Real-time analytics dashboard
- 👥 Customer management and analytics
- 💰 Billing and revenue tracking
- 📈 Interactive charts and data visualization
- ⚙️ Customizable settings
- 🎨 Modern, responsive UI

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd habesha-analytics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env.local` file:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

## Project Structure

- `src/components/` - React components
- `src/lib/` - Utility functions
- `index.html` - Entry point
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Recharts for data visualization
- Motion for animations

## License

MIT
