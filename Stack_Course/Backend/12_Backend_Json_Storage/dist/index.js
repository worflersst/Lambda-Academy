"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3004;
app.use(express_1.default.json());
const storage = {};
app.get('/', (req, res) => {
    res.send('Work!');
});
app.post('/:save', (req, res) => {
    const { save: key } = req.params;
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
        res.status(400).json({ message: 'Body is required' });
    }
    storage[key] = data;
    res.status(200).json({ message: 'Data saved', key, data });
});
app.get('/:getUser', (req, res) => {
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
