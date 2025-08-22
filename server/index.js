import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

// Get the directory name for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Configure CORS properly for both development and production
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true)
        
        // Get allowed origins from environment variable or use defaults
        const allowedOrigins = process.env.ALLOWED_ORIGINS 
            ? process.env.ALLOWED_ORIGINS.split(',')
            : [
                'http://localhost:3000',
                'http://localhost:5173',
                'http://127.0.0.1:5173',
                'https://sellingcoursess.netlify.app'  // Your Netlify domain
            ]
        
        // Check if the origin is in our allowed list
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
}

// Use CORS middleware
app.use(cors(corsOptions))

// Handle preflight requests
app.options('*', cors(corsOptions))

// Serve static files
app.use(express.static(path.join(__dirname, '../dist')))

// Handle SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server Nodejs listening on port ${PORT}`)
    
    // Log allowed origins for debugging
    const allowedOrigins = process.env.ALLOWED_ORIGINS 
        ? process.env.ALLOWED_ORIGINS.split(',')
        : [
            'http://localhost:3000',
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'https://sellingcoursess.netlify.app'
        ]
    console.log('Allowed origins:', allowedOrigins)
})