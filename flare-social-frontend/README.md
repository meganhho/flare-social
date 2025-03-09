# AI Debates with Multiple Perspectives

This is a modern Twitter-like frontend application that allows users to:

1. **Select a Twitter persona** to imitate (e.g., Elon Musk, Bill Gates)
2. **Create posts** with text and media
3. **View auto-generated replies/comments** from various perspectives

## Features

- Clean, modern UI with a beautiful pink/navy color scheme
- Responsive design that works on mobile, tablet, and desktop
- Mock data to demonstrate functionality
- Ability to upload media (images) to posts
- Auto-generated AI replies from various Twitter personalities

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/components` - React components
- `/src/app` - Next.js app directory
- `/public` - Static assets

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript

## Future Improvements

- Connect to a real backend to persist data
- Add authentication for user accounts
- Implement real AI for generating replies based on the selected persona's style
- Add more interactive features like likes, retweets, etc.
