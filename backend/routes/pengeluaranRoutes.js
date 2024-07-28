import express from 'express';
import { createPengguna, updatePengguna, deletePengguna, getPenggunaWithKebutuhan } from '../controllers/penggunaController.js';

const router = express.Router();

router.post('/pengguna', createPengguna);
router.put('/pengguna/:id', updatePengguna);
router.delete('/pengguna/:id', deletePengguna);
router.get('/pengguna', getPenggunaWithKebutuhan); // Route baru untuk mendapatkan data pengguna beserta keperluan

export default router;
