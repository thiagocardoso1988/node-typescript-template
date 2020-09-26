import { Router } from 'express';
import StartController from '@controllers/startController';

const router: Router = Router({ mergeParams: true });
const ROUTE_URL = '/start';

router.get(ROUTE_URL, StartController);

export default router;
