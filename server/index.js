import express from 'express'
import path from 'path'

const app = express()

app.use(express.static(path.resolve('../dist')));

app.all('*', (req, res, next) => {
    res.sendFile(path.resolve('../dist/index.html'))
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
})

app.get('/elearning/v4/courses', (req, res) => {
    res.json({ message: 'This is the API response.' });
});

app.listen(3000, () => {
    console.log('Server Nodejs listen on port 3000')
})