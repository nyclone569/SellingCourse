import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()

const corsOptions = {
    origin: '*', 
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));

app.use(express.static(path.resolve('../dist')));

app.all('*', (req, res) => {
    res.sendFile(path.resolve('../dist/index.html'))
})

app.listen(3000, () => {
    console.log('Server Nodejs listen on port 3000')
})