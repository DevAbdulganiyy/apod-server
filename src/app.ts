import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apodRoutes from './routes/apodRoutes';
import rateLimit from 'express-rate-limit';
import requestLogger from './middlewares/loggerMIddleware';
import errorHandler from './middlewares/errorMiddlware';




dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Rate limiter middleware configuration
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes window
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
    headers: true,
  });
  


// Middleware
app.use(cors());
app.use(express.json());

app.use(requestLogger);


// Routes
app.get('/', (req, res) => {
    res.send("Home")
});

// Apply rate limiter to all API routes
app.use('/api/', apiLimiter);

app.use('/api', apodRoutes);


// Error handling middleware (should be after routes)
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
