import {Router} from "express";
import cryptoControllers from "../controllers/cryptoControllers";


const router = Router()

router.get('/crypto', cryptoControllers.giveCryptoData)

export default router