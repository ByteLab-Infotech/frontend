# ByteLab Frontend

Frontend application for the ByteLab Infotech Platform - an automated virtual internship management system built with Next.js and React.

## Tech Stack

- **Framework**: Next.js 14.0.4
- **Language**: TypeScript 5.3.3
- **UI Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.6
- **State Management**: Zustand 4.4.7
- **HTTP Client**: Axios 1.6.2
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.555.0
- **QR Code**: qrcode.react 3.2.0
- **Markdown**: react-markdown 10.1.0

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Backend API running (default: http://localhost:8080)
- PDF Service running (default: http://localhost:3001)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Configuration

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_PDF_SERVICE_URL=http://localhost:3001
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── about/             # Static pages
│   └── verify/             # Certificate verification
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── dashboard/         # Dashboard-specific components
│   └── sections/          # Page sections
├── lib/                   # Utility functions
│   ├── api.ts             # API client configuration
│   └── animations.ts     # Animation utilities
├── store/                 # Zustand state management
│   ├── authStore.ts       # Authentication state
│   └── internshipStore.ts # Internship state
├── hooks/                 # Custom React hooks
├── public/                # Static assets
└── data/                  # Static data files
```

## Key Features

- User authentication and authorization
- Student dashboard with task management
- Admin dashboard for managing internships
- GitHub repository submission and validation
- UPI payment integration with QR code generation
- Certificate and offer letter generation
- Document verification system
- Responsive design with mobile support

## API Integration

The frontend communicates with the backend API through the Axios client configured in `lib/api.ts`. All API requests include JWT authentication tokens stored in the Zustand auth store.

### Main API Endpoints Used

- `/auth/login` - User authentication
- `/auth/register` - User registration
- `/internship/details` - Get internship details
- `/tasks/assigned` - Get assigned tasks
- `/tasks/submit-github` - Submit GitHub repository
- `/payment/initiate` - Initiate payment
- `/payment/submit-transaction` - Submit transaction reference
- `/payment/status` - Get payment status
- `/admin/*` - Admin endpoints (requires admin role)

## State Management

The application uses Zustand for state management:

- **authStore**: Manages user authentication state, JWT tokens, and user information
- **internshipStore**: Manages internship-related state

## Styling

The application uses Tailwind CSS for styling with a custom color palette defined in `tailwind.config.ts`. The design system includes:

- Custom color scheme (navy, electric-blue, charcoal, etc.)
- Responsive breakpoints
- Custom animations and transitions
- Component variants

## Development Guidelines

1. **Component Structure**: Use functional components with TypeScript
2. **File Naming**: Use PascalCase for components, camelCase for utilities
3. **Code Style**: Follow Next.js and React best practices
4. **State Management**: Use Zustand for global state, local state for component-specific data
5. **API Calls**: Use the configured Axios instance from `lib/api.ts`
6. **Error Handling**: Implement proper error boundaries and user feedback

## Environment Variables

- `NEXT_PUBLIC_API_URL`: Backend API base URL
- `NEXT_PUBLIC_PDF_SERVICE_URL`: PDF service base URL

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Next.js will automatically use the next available port.

### API Connection Issues

Ensure the backend API is running on the configured port (default: 8080) and CORS is properly configured.

### Build Errors

Clear the `.next` directory and rebuild:
```bash
rm -rf .next
npm run build
```

## License

Private - ByteLab Infotech


