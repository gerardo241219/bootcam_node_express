import express from 'express';
import userRoutes from './routes/userRoutes.js';

const server = express();
const port = 3000;

server.use('/user', userRoutes);

// GET - req.query
// POST - req.body
// PUT - req.params
// DELETE - req.params


server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})