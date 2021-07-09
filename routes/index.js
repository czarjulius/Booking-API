import express from 'express';
import client from './client';;

const router = express.Router();

router.use('/api/v1', client);

export default router;