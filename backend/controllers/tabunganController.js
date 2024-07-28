import { Tabungan } from '../models/index.js';

export const createTabungan = async (req, res) => {
    try {
        const tabungan = await Tabungan.create(req.body);
        res.status(201).json(tabungan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateTabungan = async (req, res) => {
    try {
        const tabungan = await Tabungan.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(tabungan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteTabungan = async (req, res) => {
    try {
        await Tabungan.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
