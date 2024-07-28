import express from 'express';
import bodyParser from 'body-parser';
import penggunaRoutes from '../routes/penggunaRoutes.js';
import gajiRoutes from '../routes/gajiRoutes.js';
import kebutuhanRoutes from '../routes/kebutuhanRoutes.js';
import pengeluaranRoutes from '../routes/pengeluaranRoutes.js';
import tabunganRoutes from '../routes/tabunganRoutes.js';
import { sequelize } from '../models/index.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', penggunaRoutes);
app.use('/api', gajiRoutes);
app.use('/api', kebutuhanRoutes);
app.use('/api', pengeluaranRoutes);
app.use('/api', tabunganRoutes);

sequelize.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
