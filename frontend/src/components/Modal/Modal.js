import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
    const [jumlahKeperluan, setJumlahKeperluan] = useState(1);

    const keperluanFields = [];
    for (let i = 0; i < jumlahKeperluan; i++) {
        keperluanFields.push(
            <div key={i} className="flex gap-2 my-2">
                <input type="text" placeholder="Nama Keperluan" className="flex-1 border p-2" />
                <input type="number" placeholder="Jumlah" className="flex-1 border p-2" />
                <input type="text" placeholder="Tag" className="flex-1 border p-2" />
            </div>
        );
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
                <h2 className="text-center text-xl mb-4">Masukkan Gaji</h2>
                <input type="number" placeholder="Jumlah Gaji" className="w-full border p-2 mb-4" />
                <div className="flex justify-between items-center mb-4">
                    <span>Jumlah Keperluan</span>
                    <select
                        value={jumlahKeperluan}
                        onChange={(e) => setJumlahKeperluan(parseInt(e.target.value))}
                        className="border p-2"
                    >
                        {[1, 2, 3].map((n) => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                </div>
                {keperluanFields}
                <div className="flex justify-end gap-4 mt-4">
                    <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">Close</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
