import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
const SERPER_API_KEY = process.env.SERPER_API_KEY;

app.post('/api/search', async (req, res) => {
    const { query } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Falta el parámetro de búsqueda "query"' });
    }

    try {
        const response = await axios.post(
            'https://google.serper.dev/search',
            { q: query },
            {
                headers: {
                    'X-API-KEY': SERPER_API_KEY,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error al consultar Serper:', error.response?.data || error.message);
        res.status(500).json({ error: 'Error al consultar la API de Serper' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
