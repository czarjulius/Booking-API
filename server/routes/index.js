import express from 'express';
import { router as client } from './client';
import { router as business } from './business';
import { router as common } from './common';

const router = express.Router();

router.use('/api/v1', client);
router.use('/api/v1', business);
router.use('/api/v1', common);

export { router };
