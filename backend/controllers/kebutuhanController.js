import { Kebutuhan } from '../models/index.js';

export const createKebutuhan = async (req, res) => {
    try {
        const kebutuhan = await Kebutuhan.create(req.body);
        res.status(201).json(kebutuhan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateKebutuhan = async (req, res) => {
    try {
        const kebutuhan = await Kebutuhan.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(kebutuhan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteKebutuhan = async (req, res) => {
    try {
        await Kebutuhan.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
