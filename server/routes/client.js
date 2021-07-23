import express from 'express';
import { Client } from '../controllers';
import Authenticate from '../middlewares/auth';
import { isAdmin, adminAndRegular } from '../middlewares/validateRole';
import { newBooking, bookingId } from '../validators/client';
const router = express.Router();

router.post('/booking', Authenticate, isAdmin, newBooking, Client.booking);
router.delete('/booking/:id', bookingId, isAdmin, Client.deleteBooking);
router.get('/schedulers', Authenticate, adminAndRegular, Client.scheduler);

export default router;
