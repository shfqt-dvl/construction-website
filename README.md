# Mushad Construction & Hardware Website

A construction and hardware store website built using React, Vite, Node.js, Express, and MongoDB.

## Features

- Home page with store information
- Product categories and product details
- Product galleries for different construction materials
- Contact section for customer enquiries
- Customer account and profile management
- User authentication using Clerk

## Tech Stack

- **Frontend:** React, Vite, JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Clerk

## Getting Started

1. Clone the repository.
2. Install the frontend dependencies using `npm install`.
3. Configure the environment variables required by the application.
4. Start the frontend and backend using their respective development commands.

## Netlify Deployment

Use `npm run build` as the build command and `dist` as the publish directory.

The site uses React Router for client-side routing. `public/_redirects` supplies
the Netlify fallback to `index.html` so direct links and refreshes on pages such
as `/about`, `/products/cement`, and `/gallery/steel` load the app rather than a
Netlify 404. Vite copies this file into the publish directory during the build.
Existing static files remain accessible, and unknown page URLs display the
app's existing Page Not Found screen.

After deployment, check direct links and refreshes on these routes, along with
`/favicon.svg` and an unknown page URL, to confirm routing and assets still work.

## Note

Keep secret keys, database credentials, and `.env` files private. Never upload them to GitHub.
