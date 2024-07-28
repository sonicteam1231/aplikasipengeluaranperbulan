import express from 'express';
import { createTabungan, updateTabungan, deleteTabungan } from '../controllers/tabunganController.js';

const router = express.Router();

router.post('/tabungan', createTabungan);
router.patch('/tabungan/:id', updateTabungan);
router.delete('/tabungan/:id', deleteTabungan);

export default router;
