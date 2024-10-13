# NASA APOD Backend API

## Overview

This is the backend service for the NASA APOD application. It provides an API that integrates with the [NASA Astronomy Picture of the Day (APOD) API](https://api.nasa.gov/), allowing for fetching the current APOD and retrieving historical APODs based on specific filters like **count** and **date range**.

The backend is built with **Node.js**, **Express.js**, and **TypeScript**.

## Features

- Fetch the **Astronomy Picture of the Day** (APOD).
- Retrieve historical APOD images using:
  - **Count**: Specify the number of random APODs to retrieve.
  - **Date Range**: Retrieve APODs within a specific date range.
- Gracefully handle **NASA API rate limits**.
- Logging and error-handling middleware.
  
## Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- A NASA API Key (available from [NASA API Registration](https://api.nasa.gov/)).

## Installation

1. Clone the repository and navigate to the backend directory:

   ```bash
   git clone https://github.com/yourusername/apod-server.git
   cd apod-server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `/apod-server` directory and add your NASA API key:

   ```bash
   NASA_API_KEY=your_api_key_here
   ```

## Running the Backend

1. Start the Express server in development mode:

   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:4000`.

## API Endpoints

### 1. **GET** `/api/apods`
Fetch APOD images, optionally with filters for **count** and **date range**.

#### Query Parameters:
- `count` (optional): Number of random APODs to retrieve.
- `startDate` (optional): The start date for retrieving APODs (`YYYY-MM-DD` format).
- `endDate` (optional): The end date for retrieving APODs (`YYYY-MM-DD` format).

#### Example Request:
```
/api/apods?count=5&startDate=2023-01-01&endDate=2023-12-31
```

#### Example Response:
```json
[
  {
    "title": "Astronomy Picture 1",
    "date": "2023-09-01",
    "url": "https://apod.nasa.gov/apod/image/xxxx.jpg",
    "explanation": "Explanation of the image...",
  },
  ...
]
```

## Error Handling

If an error occurs during API requests (e.g., API rate limit reached), the server will return a JSON error message.

### Example Error Response:
```json
{
  "error": "Failed to fetch APODs due to NASA API rate limit."
}
```

## Logging

The backend includes middleware to log all incoming requests for debugging and monitoring purposes. This can be useful for tracking how many requests are being made to the NASA API and detecting any issues.

## Middleware

### Logger Middleware

Logs incoming requests and their status codes.

### Error Middleware

Handles errors and sends appropriate JSON responses to the client.

## Available Scripts

- **`npm run dev`**: Run the server in development mode (with **nodemon**).
- **`npm run build`**: Build the TypeScript project into JavaScript.
- **`npm run start`**: Run the compiled JavaScript code.
  
## Future Improvements

- **Caching**: Add caching mechanisms to reduce redundant API calls to NASA.
  
## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.