# Bauai App

Bauai is a web application for managing items in a farming and agricultural context. The project is built using **Next.js**, **Prisma**, **PostgreSQL**, and **Tailwind CSS** for the frontend. It includes features like user authentication, item creation, and item management with an admin console for managing user registration.

## Features

- **Authentication**: Users can sign up, log in, and manage their profiles.
- **CRUD Operations**: Users can create, view, and delete items related to their farming activities.
- **Admin Console**: An admin panel to manage user registration and other data.
- **Real-time Database**: The app integrates with a **PostgreSQL RDS** for storage and management of data.

## Tech Stack

- **Frontend**: React (Next.js with App Router), Tailwind CSS
- **Backend**: Node.js, Prisma ORM
- **Database**: PostgreSQL (RDS)
- **Authentication**: NextAuth.js

## Installation

### Prerequisites

1. Node.js (>= 16.x)
2. PostgreSQL (for local development or use RDS)

### Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/bauai-app.git
    ```

2. Install dependencies:

    ```bash
    cd bauai-app
    npm install
    ```

3. Set up your environment variables in a `.env` file. Example:

    ```bash
    DATABASE_URL=postgresql://user:password@localhost:5432/mydb?schema=public
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-nextauth-secret
    ```

4. Run the database migrations (using Prisma):

    ```bash
    npx prisma migrate dev
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open the app in your browser:

    ```bash
    http://localhost:3000
    ```

## Deployment

This app can be deployed to any platform that supports Node.js, such as **Vercel**, **Netlify**, or **AWS**.

For **Vercel**:

1. Link your GitHub repository to Vercel.
2. Configure the app to use **Next.js**.
3. Set up the environment variables in Vercel.
4. Deploy!

## Contributing

Feel free to fork the repository and make improvements. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes.
4. Push to your fork and create a pull request.

