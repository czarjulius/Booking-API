import express from 'express';
import { Common } from '../controllers';
import Authenticate from '../middlewares/auth';
import { isAdmin, adminAndRegular } from '../middlewares/validateRole';

const router = express.Router();

router.get('/users', Authenticate, adminAndRegular, Common.getUserByAgent);
router.get('/agents', Authenticate, isAdmin, Common.getAllAgents);

export default router;
