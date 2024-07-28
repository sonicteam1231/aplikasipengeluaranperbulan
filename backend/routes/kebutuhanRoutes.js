import express from 'express';
import { createKebutuhan, updateKebutuhan, deleteKebutuhan, getAdminData } from '../controllers/kebutuhanController.js';

const router = express.Router();

router.get('/admin-data', getAdminData);
router.post('/kebutuhan', createKebutuhan);
router.patch('/kebutuhan/:id', updateKebutuhan);
router.delete('/kebutuhan/:id', deleteKebutuhan);

export default router;
