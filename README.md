
# Twitter Clone

This is a Twitter clone built using modern web technologies. It features a robust authentication system, notification functionality, image uploads, and a responsive layout. The application uses Next.js for the frontend framework, React for UI components, Tailwind CSS for styling, Zustand for state management, Prisma ORM with MongoDB for database interactions, and NextAuth.js for authentication.

## Features

- **Authentication System**: Secure user login and registration.
- **Notification System**: Real-time notifications for user interactions.
- **Image Upload**: Upload images using Base64 strings.
- **Database**: Prisma ORM with MongoDB for efficient data handling.
- **Responsive Layout**: Fully responsive design for various devices.
- **Relations**:
  - **1 To Many**: User to Post relationship.
  - **Many To Many**: Post to Comment relationship.
- **Following Functionality**: Follow and unfollow users.
- **Comments / Replies**: Add comments and replies to posts.
- **Likes Functionality**: Like and unlike posts.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: Zustand
- **Database**: MongoDB (via Prisma ORM)
- **Authentication**: NextAuth.js

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js
- npm (or yarn)
- MongoDB

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/NithinChowdaryRavuri/ncr-twitter.git
    cd ncr-twitter
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following environment variables:
    ```env
    DATABASE_URL="your_mongodb_connection_string"
    NEXTAUTH_JWT_SECRET="NEXTAUTH_JWT_SECRET"
    NEXTAUTH_SECRET="NEXTAUTH_SECRET"
    ```

4. **Run database migrations:**
    ```bash
    npx prisma migrate dev
    ```

5. **Start the development server:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

```plaintext
.
├── prisma                 # Prisma schema and migrations
├── public                 # Static files
├── components             # React components
├── hooks              	   # Custom hooks
├── libs              	   # Custom functions
├── pages
│   ├── api         	   # Api routes
│   ├── posts              # Next.js posts page
│   ├── user               # Next.js user page
│   └── ...                # Other directories and files
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── ...                    # Other configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the creators of Next.js, React, Tailwind CSS, Zustand, Prisma, MongoDB, and NextAuth.js for providing such great tools to build this application.

---

Happy coding! 🚀
