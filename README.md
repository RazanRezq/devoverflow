# Devoverflow

Devoverflow is a modern, full-stack web application inspired by developer Q&A platforms. It enables users to ask questions, share knowledge, and connect with the tech community. Built with Next.js, TypeScript, Tailwind CSS, and Bun, it offers a performant, scalable, and visually appealing experience.

## Features

- **User Authentication:** Secure sign-in/sign-up with social providers (Google, GitHub).
- **Ask & Answer Questions:** Post questions, provide answers, and engage in discussions.
- **Tagging System:** Organize questions by technology tags for easy discovery.
- **User Profiles:** View and edit personal profiles, track contributions.
- **Community & Jobs:** Explore community posts and job opportunities.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Modern UI:** Built with Tailwind CSS and custom components for a clean look.

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Bun
- **Authentication:** NextAuth.js
- **State Management:** React Context
- **Styling:** Tailwind CSS, PostCSS

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1+)
- [Node.js](https://nodejs.org/) (if Bun is not used)

### Installation

```bash
bun install
```

### Running the App

```bash
bun run dev
```

The app will be available at `http://localhost:3000`.

### Environment Variables

Create a `.env.local` file and add your authentication provider credentials:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
```

## Project Structure

```
app/            # Next.js app directory
components/     # Reusable UI components
constants/      # Static values and routes
context/        # React context providers
lib/            # Utility functions and validations
public/         # Static assets (images, icons)
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or job opportunities, please contact [your-email@example.com].
