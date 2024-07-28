import { Pengguna, Gaji, Kebutuhan, Pengeluaran, Tabungan } from '../models/index.js';
import { Op } from 'sequelize';

export const createPengguna = async (req, res) => {
    try {
        const pengguna = await Pengguna.create(req.body);
        res.status(201).json(pengguna);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updatePengguna = async (req, res) => {
    try {
        const pengguna = await Pengguna.update(req.body, {
            where: { id: req.params.id }
        });
        res.status(200).json(pengguna);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePengguna = async (req, res) => {
    try {
        await Pengguna.destroy({ where: { id: req.params.id } });
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Menambahkan controller untuk mendapatkan data pengguna beserta keperluan
export const getPenggunaWithKebutuhan = async (req, res) => {
    const { bulan, tahun } = req.query;

    try {
        const pengguna = await Pengguna.findAll({
            include: [
                {
                    model: Gaji,
                    where: {
                        bulan_tahun: {
                            [Op.gte]: new Date(tahun, bulan - 1, 1),
                            [Op.lt]: new Date(tahun, bulan, 1)
                        }
                    },
                    include: [
                        {
                            model: Kebutuhan,
                            include: [Pengeluaran]
                        }
                    ]
                }
            ]
        });

        // Pastikan selalu mengembalikan array
        res.json(Array.isArray(pengguna) ? pengguna : []);
    } catch (error) {
        console.error('Error fetching pengguna:', error);
        res.status(500).json({ message: error.message });
    }
};
