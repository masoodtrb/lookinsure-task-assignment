# User Dashboard - Random User Data

A modern, responsive user dashboard built with Next.js, TypeScript, and Material-UI that displays random user data from the Random User Generator API.

## Features

### ✅ Core Features

- **User Data Display**: Shows 10+ random users with profile pictures, names, emails, and countries
- **Interactive Cards**: Each user card displays basic info with a "Show More Details" button
- **Modal Details**: Click to view additional user information (phone, address) in a modal
- **Search Functionality**: Search users by name or email with real-time filtering
- **Country Filter**: Filter users by country using a dropdown
- **Statistics Widget**: Displays total users and country distribution
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop

### ✅ Technical Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Material-UI (MUI)** for beautiful, consistent UI components
- **Zustand** for state management
- **SCSS** for custom styling with variables, mixins, and responsive design
- **Axios** for API integration
- **Jest & React Testing Library** for unit testing

### ✅ Bonus Features

- **Performance Optimized**: Efficient state updates and minimal re-renders
- **Error Handling**: Graceful error states and loading indicators
- **Animations**: Smooth hover effects and transitions
- **Unit Tests**: Comprehensive test coverage for key components
- **Modern UI/UX**: Clean, professional design with thoughtful interactions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Material-UI SSR setup
│   ├── page.tsx           # Main dashboard page (client-side)
│   ├── ssr/               # Server-side rendered pages
│   │   └── page.tsx       # SSR dashboard page
│   └── favicon.ico        # App favicon
├── components/            # React components
│   ├── UserDashboard.tsx  # Main dashboard component
│   ├── SearchAndFilter.tsx # Search and filter controls
│   ├── StatisticsWidget.tsx # Statistics display
│   ├── StatisticsChart.tsx # Chart.js integration
│   ├── StatisticsChartPlaceholder.tsx # Chart loading state
│   ├── UserCardList.tsx   # User cards grid
│   ├── UserCard.tsx       # Individual user card
│   └── __tests__/         # Test files
│       └── UserCard.test.tsx # Component tests
├── modules/               # Feature modules
│   ├── home/              # Home page module
│   │   └── index.tsx      # Home page component
│   └── layout/            # Layout components
│       ├── main.tsx       # Main layout with navigation
│       └── ThemeRegistry.tsx # Material-UI theme setup
├── store/                 # State management
│   ├── userStore.ts       # Zustand store for user data
│   └── StoreProvider.tsx  # Zustand store provider
├── styles/                # SCSS styles
│   ├── globals.scss       # Global styles
│   └── dashboard.scss     # Custom dashboard styles
└── types/                 # TypeScript type definitions
│   ├── global.d.ts        # Global type declarations
│   └── jest.d.ts          # Jest type definitions
```

## API Integration

The dashboard fetches data from the [Random User Generator API](https://randomuser.me/api/):

- **Endpoint**: `https://randomuser.me/api/?results=10`
- **Data**: User profiles with names, emails, locations, and profile pictures
- **Error Handling**: Graceful fallbacks for API failures

## State Management

Uses **Zustand** for global state management:

- **User Data**: Fetched users and filtered results
- **Search State**: Current search term and country filter
- **UI State**: Loading states and error handling
- **Real-time Updates**: Automatic filtering and search

## Styling

### SCSS Features Used

- **Variables**: Color schemes and spacing
- **Mixins**: Reusable hover effects and responsive grids
- **Nesting**: Organized, readable styles
- **Responsive Design**: Mobile-first approach

### Material-UI Integration

- **Theme Provider**: Consistent design system
- **Responsive Grid**: Adaptive layouts
- **Component Library**: Pre-built, accessible components

## Testing

### Test Coverage

- **Component Testing**: UserCard component with modal interactions
- **User Interactions**: Button clicks, form inputs, modal open/close
- **Accessibility**: Screen reader friendly components

### Running Tests

```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode for development
npm run test:coverage     # Coverage report
```

## Performance Optimizations

- **Efficient Re-renders**: Optimized state updates
- **Lazy Loading**: Components load as needed
- **Image Optimization**: Next.js automatic image optimization
- **Bundle Optimization**: Tree shaking and code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Random User Generator API](https://randomuser.me/) for providing test data
- [Material-UI](https://mui.com/) for the component library
- [Next.js](https://nextjs.org/) for the React framework
- [Zustand](https://github.com/pmndrs/zustand) for state management
