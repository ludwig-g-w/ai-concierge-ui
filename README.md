# LangGraph Concierge Frontend

A modern React/Next.js frontend application for the [LangGraph Concierge](https://github.com/ludwig-g-w/langgraph-concierge) project - a sophisticated conversational agent with persistent memory capabilities.

## Features

- 💬 **Real-time Chat Interface**: Seamless conversational experience with streaming responses
- 🔄 **State Management**: Integrated thread state handling for complex conversations
- 🎨 **Modern UI**: Built with Next.js 14, Tailwind CSS, and Geist font family
- 🔌 **API Integration**: Seamless connection with LangGraph Concierge backend
- 📱 **Responsive Design**: Works across desktop and mobile devices

## Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun
- Running instance of [LangGraph Concierge](https://github.com/ludwig-g-w/langgraph-concierge) backend

## Quick Start

1. **Clone the Repository**

2. **Install Dependencies**

3. **Configure Environment**

```env
NEXT_PUBLIC_LANGGRAPH_API_URL=<your-backend-url>
NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID=<your-assistant-id>
```

4. **Run Development Server**

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── app/                  # Next.js app directory
├── components/          # React components
│   ├── assistant-ui/   # UI components
│   └── tools/         # Assistant tool components
├── lib/                # Utility functions and API clients
└── public/            # Static assets
```

## Key Components

- `MyAssistant.tsx`: Main assistant interface component
- `chatApi.ts`: API client for LangGraph Concierge backend
- `RuntimeProvider.tsx`: Context provider for runtime configuration
- Various tool components for assistant functionality

## Configuration

### Backend Connection

The frontend connects to the LangGraph Concierge backend through the `NEXT_PUBLIC_LANGGRAPH_API_URL` environment variable. By default, it falls back to the current host's `/api` path if not specified.

### Styling

- Uses Tailwind CSS for styling
- Includes Geist font family for modern typography
- Customizable through `tailwind.config.ts`

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production bundle
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Related Projects

- [LangGraph Concierge](https://github.com/ludwig-g-w/langgraph-concierge) - Backend implementation
