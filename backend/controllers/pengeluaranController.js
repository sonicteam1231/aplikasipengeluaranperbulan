import { Pengeluaran } from '../models/index.js';

export const createPengeluaran = async (req, res) => {
    try {
        const pengeluaran = await Pengeluaran.create(req.body);
        res.status(201).json(pengeluaran);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatePengeluaran = async (req, res) => {
    try {
        const pengeluaran = await Pengeluaran.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(pengeluaran);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePengeluaran = async (req, res) => {
    try {
        await Pengeluaran.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
