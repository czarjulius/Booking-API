import express from 'express';
import {Client} from '../controllers';

const router = express.Router();

router.post('/booking', Client.booking);
router.delete('/booking/:id', Client.deleteBooking);

export default router;