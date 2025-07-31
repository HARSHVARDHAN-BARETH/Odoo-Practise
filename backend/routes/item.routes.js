import { Router } from 'express';

import {createItemController} from "../controllers/item.controller.js"

import {authUser} from '../middlewares/auth.middleware.js'

const router = Router();



router.post('/items', authUser, createItemController);


export default router