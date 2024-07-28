import express from 'express';
import { createGaji, updateGaji, deleteGaji } from '../controllers/gajiController.js';

const router = express.Router();

router.post('/gaji', createGaji);
router.patch('/gaji/:id', updateGaji);
router.delete('/gaji/:id', deleteGaji);

export default router;
