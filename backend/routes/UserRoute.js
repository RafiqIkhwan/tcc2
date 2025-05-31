import express from "express";
import {
    loginHandler,
    registerHandler,
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();

// Auth routes
router.post('/login', loginHandler);
router.post('/register', registerHandler);

// User CRUD routes
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;