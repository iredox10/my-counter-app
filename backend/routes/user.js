import express from 'express';
const userRouter = express.Router();
import * as controller from '../controllers/user.js';

userRouter.post('/signup', controller.signup);

userRouter.post('/signin', controller.signin);


export default userRouter;