import express from 'express'
import path from 'path'

const cors = require('cors');
const app = express()

app.use(express.static('../dist'));
app.use(cors({
    origin: 'https://sellingcourse.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
}))


app.all('*', (req, res) => {
    res.sendFile(path.resolve('../dist/index.html'))
})

app.listen(3000, () => {
    console.log('Server Nodejs listen on port 3000')
})