# Country Info Backend

This project is a NestJS application that serves as the backend for a Country Info application. It provides endpoints to fetch country information, population data, and flags.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **RxJS**: A library for reactive programming using Observables.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **dotenv**: For loading environment variables.

## Prerequisites

- Node.js (version 14 or higher)
- NPM (usually installed with Node.js)
- Nest CLI (optional, for easier project management)

## Getting Started

To get started, first clone the repository using the following command:

```bash
git clone <https://github.com/Dougcgonca/backend-develops-today>
cd backend


```

Then, install the necessary dependecies:

```bash
npm install
```

A .env is in the repository with the urls's the project need to work.

Run the application:

```bash
npm run start:dev
```

The server will start on http://localhost:3000 by default.

## API Endpoints

GET /countries
Fetch a list of available countries.

GET /countries/:country
Fetch detailed information about a specific country.

GET /countries/population/:country
Fetch population data for a specific country.

GET /countries/flag/:country
Fetch the flag image for a specific country.

## Error Handling

All endpoints are designed to handle errors gracefully. In case of an error, the server will respond with appropriate HTTP status codes and error messages.

## Learning Resources

For more information on working with NestJS, check out the NestJS documentation.

## Contact

For questions or suggestions, you can reach me at dougc.gonca@gmail.com
