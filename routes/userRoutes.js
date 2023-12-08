import express from 'express';
import { createUser, clientUsers, updateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();
// const { createUser, readUser, updateUser, deleteUser } = UserController();

router.post('/create', createUser);
router.get('/update', updateUser);
router.post('/read', clientUsers);
router.get('/delete', deleteUser);

export default router;