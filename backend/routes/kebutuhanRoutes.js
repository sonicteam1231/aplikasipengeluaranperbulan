import express from 'express';
import { createKebutuhan, updateKebutuhan, deleteKebutuhan } from '../controllers/kebutuhanController.js';

const router = express.Router();

router.post('/kebutuhan', createKebutuhan);
router.patch('/kebutuhan/:id', updateKebutuhan);
router.delete('/kebutuhan/:id', deleteKebutuhan);

export default router;
