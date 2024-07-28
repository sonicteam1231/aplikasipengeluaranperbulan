import express from 'express';
import { createPengguna, updatePengguna, deletePengguna } from '../controllers/penggunaController.js';

const router = express.Router();

router.post('/pengguna', createPengguna);
router.patch('/pengguna/:id', updatePengguna);
router.delete('/pengguna/:id', deletePengguna);

export default router;
