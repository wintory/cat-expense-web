# Cat Expense Web

A React-based web application for managing and tracking cat expenses.

## Features

- **Expense Management**: Add, delete and show expense cat fact.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
  - DaisyUI
- **Tools**:
  - Vite.js (for bundling and development)
  - ESLint and Prettier (for code linting and formatting)
  - Vitest and React Testing Library (for testing)

## Installation

Follow these steps to get started with the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/wintory/cat-expense-web.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd cat-expense-web
   ```

3. **Install dependencies**:

   ```bash
   yarn install
   ```

4. **Start the development server**:

   ```bash
   yarn dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Scripts

Here are some useful scripts you can run:

- **`yarn dev`**: Start the development server.
- **`yarn build`**: Build the app for production.
- **`yarn test`**: Run the test suite.
- **`yarn lint`**: Lint the codebase using ESLint.

## Folder Structure

```
cat-expense-web/
├── public/          # Static assets
├── src/
│   ├── assets/      # All asset files (e.g. image, icon)
│   ├── components/  # All components (container level)
│   ├── constants/   # Shared constants
│   ├── pages/       # Application pages
│   ├── utilities/   # Helper functions and utilities
│   ├── hooks/       # Custom React hooks
│   ├── services/    # Service functions
│   └── tests/       # Unit and integration tests setup file
└── package.json     # Project metadata and dependencies
```
