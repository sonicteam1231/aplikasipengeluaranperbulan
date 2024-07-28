import  { Gaji, Kebutuhan, Pengeluaran } from '../models/index.js';

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


export const getAdminData = async (req, res) => {
    try {
        const gaji = await Gaji.findOne({ where: { bulan: req.query.bulan, tahun: req.query.tahun } });
        const kebutuhan = await Kebutuhan.findAll({ where: { bulan: req.query.bulan, tahun: req.query.tahun } });
        const pengeluaran = await Pengeluaran.findAll({ where: { bulan: req.query.bulan, tahun: req.query.tahun } });
        
        // Calculate values for the cards
        const belanjaBulanan = kebutuhan.find(k => k.keperluan === 'Belanja Bulanan')?.jumlah || 0;
        const anakPertama = kebutuhan.find(k => k.keperluan === 'Uang Anak Pertama')?.jumlah || 0;
        const anakKedua = kebutuhan.find(k => k.keperluan === 'Uang Anak Kedua')?.jumlah || 0;

        res.json({ gaji: gaji.jumlah, belanjaBulanan, anakPertama, anakKedua });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

