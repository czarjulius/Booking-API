import express from 'express';
import {Business} from '../controllers';
import { isAdmin, agentExist} from '../middlewares/validation'
import Authenticate from '../middlewares/authorisation'

const router = express.Router();

router.get('/scheduler', Authenticate, agentExist, isAdmin, Business.scheduler);

export default router;