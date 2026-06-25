import express from 'express'
import authUser from '../middleware/auth.js';
import { loginUser, registerUser, adminLogin,getUserProfile, updateProfile } from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post("/profile", getUserProfile);
userRouter.post("/update-profile", authUser, updateProfile);


export default userRouter;