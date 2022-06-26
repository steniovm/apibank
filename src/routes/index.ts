import { Router } from 'express';
import { CustomerAccount } from '../controllers/create-user-account';

const routes = Router();

routes.route('/new').post(new CustomerAccount().create.bind(new CustomerAccount()));

export default routes;