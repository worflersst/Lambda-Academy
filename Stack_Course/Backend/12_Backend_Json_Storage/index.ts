import express, {Request, Response} from 'express';

const app = express();
const port = 3004;

app.use(express.json());

interface StorageI {
    [key: string]: unknown;
}

const storage: StorageI = {};

app.get('/',(req: Request, res: Response) => {
    res.send('Work!')
} )

app.post('/:save', (req: Request<{ save: string }>, res: Response) => {
    const { save: key } = req.params;
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
         res.status(400).json({ message: 'Body is required' });
    }

    storage[key] = data;
    res.status(200).json({ message: 'Data saved', key, data });
});

app.get('/:getUser', (req: Request<{ getUser: string }>, res: Response) => {
    const { getUser: key } = req.params;
    const data = storage[key];

    if (!data) {
         res.status(404).json({ message: 'Data not found' });
    }

    res.status(200).json(data);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
