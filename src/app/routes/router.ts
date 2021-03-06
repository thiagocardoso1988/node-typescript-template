import { Router } from 'express';
import Start from './api/start';

const router = Router({ mergeParams: true });

router.use(Start);

export default router;
