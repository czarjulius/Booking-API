import express from 'express';
import {Client} from '../controllers';

const router = express.Router();

router.post('/booking', Client.booking);

export default router;