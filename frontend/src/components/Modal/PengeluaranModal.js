import React, { useState } from 'react';

const PengeluaranModal = ({ isOpen, onClose, onSave }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ description, amount, date });
        setDescription('');
        setAmount('');
        setDate('');
    };

    return isOpen ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg w-1/2">
                <h2 className="text-2xl mb-4">Tambah Pengeluaran</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Keterangan Pengeluaran</label>
                        <input
                            type="text"
                            className="border p-2 w-full"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Jumlah Pengeluaran</label>
                        <input
                            type="number"
                            className="border p-2 w-full"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Tanggal Pengeluaran</label>
                        <input
                            type="date"
                            className="border p-2 w-full"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="bg-gray-300 p-2 rounded mr-2"
                            onClick={onClose}
                        >
                            Batal
                        </button>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    ) : null;
};

export default PengeluaranModal;
