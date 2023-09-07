import { Router } from "express";
import  {StatusCodes} from 'http-status-codes';

const router = Router();

router.get('/', (request, response) => {
	response.status(StatusCodes.OK).send('Welcome to our API');
});

export { router };
