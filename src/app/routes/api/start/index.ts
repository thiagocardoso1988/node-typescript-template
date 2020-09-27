import { Router } from 'express';
import Get from './get';

const router = Router({ mergeParams: true });

router.use(Get);

export default router;
