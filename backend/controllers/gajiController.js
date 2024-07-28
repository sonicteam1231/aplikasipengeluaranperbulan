import { Gaji } from '../models/index.js';

export const createGaji = async (req, res) => {
    try {
        const gaji = await Gaji.create(req.body);
        res.status(201).json(gaji);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateGaji = async (req, res) => {
    try {
        const gaji = await Gaji.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(gaji);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteGaji = async (req, res) => {
    try {
        await Gaji.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
