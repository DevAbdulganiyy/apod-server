import { Router } from 'express';
import { getApod, getHistoricalApods } from '../controllers/apodControllers';

const router = Router();

router.get('/apod', getApod);
router.get('/apods', getHistoricalApods);

export default router;
