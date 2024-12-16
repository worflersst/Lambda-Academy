import {Router} from "express";
import authControllers from "../controllers/authControllers";
import {check} from "express-validator";
import authMiddleware from "../middlewares/authMiddleware";


const router =  Router();

router.post('/sing_up', [
    check('email', "The Username cannot be empty").notEmpty(),
    check('password', "The Password cannot be shorted than 4 and longest than 10 characters").isLength({min: 4, max: 10})
],  authControllers.sing_up)
router.post('/login', authControllers.login)
router.post('/refresh', authControllers.refresh)
router.get('/me/:request_num',authMiddleware, authControllers.getDataUser)

export default router