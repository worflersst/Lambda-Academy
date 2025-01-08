import {Request, Response} from "express";
import cryptoRepository from "../repository/cryptoRepository";


class CryptoControllers {
     giveCryptoData = async (req: Request, res: Response) => {
    try {
        const { cryptoName, marketName, dateInterval } = req.query;
        const data = await cryptoRepository.giveCryptoDataFromDB(
            cryptoName as string,
            marketName as string,
            dateInterval as string
        );

        res.status(200).json(data);
    }catch (error) {
        console.error("Error fetching crypto data:", error);
        res.status(500).json({ error: "Failed to fetch crypto data" });
    }
    }
}

export default new CryptoControllers()