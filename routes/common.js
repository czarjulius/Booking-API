import express from 'express';
import {Common} from '../controllers';

const router = express.Router();

router.get('/users', Common.getUserByAgent);
router.get('/agents', Common.getAllAgents);

export default router;