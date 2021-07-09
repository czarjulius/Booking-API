import express from 'express';
import {Common} from '../controllers';
import Authenticate from '../middlewares/authorisation'
import { isAdmin, isAgent, agentExist} from '../middlewares/validation'

const router = express.Router();

router.get('/users',Authenticate, agentExist, isAgent, Common.getUserByAgent);
router.get('/agents', Authenticate, agentExist, isAdmin, Common.getAllAgents);

export default router;