import express from 'express';
import {Client} from '../controllers';
import Authenticate from '../middlewares/authorisation'
import { isAdmin, agentExist} from '../middlewares/validation'

const router = express.Router();

router.post('/booking', Authenticate, agentExist, isAdmin, Client.booking);
router.delete('/booking/:id', Authenticate,agentExist, isAdmin, Client.deleteBooking);

export default router;