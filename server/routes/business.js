import express from 'express';
import { Business } from '../controllers';

const router = express.Router();

router.get('/scheduler', Business.scheduler);

export default router;
