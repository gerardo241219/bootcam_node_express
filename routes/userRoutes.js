import express from 'express';
import { createUser, readUser, updateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();
// const { createUser, readUser, updateUser, deleteUser } = UserController();

router.get('/create', createUser);
router.get('/update', updateUser);
router.get('/read', readUser);
router.get('/delete', deleteUser);

export default router;