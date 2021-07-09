import express from 'express';
import client from './client';;
import business from './business';;
import common from './common';;

const router = express.Router();

router.use('/api/v1', client);
router.use('/api/v1', business);
router.use('/api/v1', common);

export default router;