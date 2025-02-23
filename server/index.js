import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()

const corsOptions = {
    origin: '*', 
    credentials:true,      
    optionSuccessStatus:200,
};

app.use(cors(corsOptions));

app.use(express.static(path.resolve('../dist')));

// app.get('/elearning/v4/courses', (req, res) => {
//     res.json({ message: 'This is the API response.' });
// });

app.all('*', (req, res) => {
    res.sendFile(path.resolve('../dist/index.html'))
})

app.listen(3000, () => {
    console.log('Server Nodejs listen on port 3000')
})