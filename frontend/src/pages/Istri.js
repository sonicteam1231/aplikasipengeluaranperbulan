import React, { useState } from 'react';
import Card from '../components/Card/Card';
import PengeluaranModal from '../components/Modal/PengeluaranModal';

const Istri = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);

    const handleSaveExpense = (expense) => {
        setExpenses([...expenses, expense]);
        setModalOpen(false);
    };

    const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0);
    const remainingBudget = 8000000 - totalExpenses; // Contoh sisa anggaran

    return (
        <div className="p-4 m-4 bg-white rounded shadow">
            <div className="flex flex-wrap gap-4 my-4">
                <Card title="Belanja Bulanan" amount={2000000} color="bg-yellow-200" />
                <Card title="Total Pengeluaran" amount={totalExpenses} color="bg-red-200" />
                <Card title="Sisa" amount={remainingBudget} color="bg-green-200" />
            </div>
            <button
                className="bg-blue-500 text-white p-2 rounded mb-4"
                onClick={() => setModalOpen(true)}
            >
                Tambah
            </button>
            <div className="bg-white p-4 rounded shadow mt-4">
                <h2 className="text-center text-xl mb-4">Tabel Dummy</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">Keterangan</th>
                            <th className="border p-2">Jumlah</th>
                            <th className="border p-2">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense, index) => (
                            <tr key={index}>
                                <td className="border p-2">{expense.description}</td>
                                <td className="border p-2">Rp. {parseFloat(expense.amount).toLocaleString()}</td>
                                <td className="border p-2">{expense.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PengeluaranModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSaveExpense}
            />
        </div>
    );
};

export default Istri;
