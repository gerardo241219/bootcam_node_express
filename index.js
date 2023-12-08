import express from 'express';
import cors from 'cors'

import userRoutes from './routes/userRoutes.js';

const port = process.env.PORT || 3000;

const server = express();
server.use(cors()); // CORS
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api/user', userRoutes);
// server.use('/api/product', productRoutes);

// GET - req.query
// POST - req.body
// PUT - req.params
// DELETE - req.params

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})