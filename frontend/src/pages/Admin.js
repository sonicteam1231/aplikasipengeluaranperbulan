import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';

const Admin = ({ bulan, tahun }) => {
    const [data, setData] = useState([]);

    const [isModalOpen, setModalOpen] = useState(false);

    const keperluanData = [
        { title: 'gaji', amount: 8000000 },
        { title: 'belanja bulanan', amount: 2000000 },
        { title: 'anak pertama', amount: 2000000 },
        { title: 'anak kedua', amount: 2000000 }
    ];
    
    useEffect(() => {
        if (bulan && tahun) {
            fetch(`http://localhost:5000/api/pengguna?bulan=${bulan}&tahun=${tahun}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Data yang diterima:", data); // Log data yang diterima
                    if (Array.isArray(data)) {
                        setData(data);
                    } else {
                        setData([]);
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }, [bulan, tahun]);

    return (
        <div className="p-4 m-4 bg-white rounded shadow">
            <Button onClick={() => setModalOpen(true)}>ADD NEW</Button>
            <div className="flex flex-wrap gap-4 my-4">
                {keperluanData.map((item, index) => (
                    <Card key={index} title={item.title} amount={item.amount} color="bg-yellow-200" />
                ))}
            </div>
            <div className="p-4 m-4 bg-white rounded shadow">
            <div className="bg-white p-4 rounded shadow mt-4">
                <h2 className="text-center text-xl mb-4">Tabel Dummy</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">User</th>
                            <th className="border p-2">Keperluan</th>
                            <th className="border p-2">Jumlah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((user, index) => (
                                user.Gajis.map((gaji, gajiIndex) => (
                                    gaji.Kebutuhans.map((keperluan, kebutuhanIndex) => (
                                        <tr key={`${index}-${gajiIndex}-${kebutuhanIndex}`}>
                                            <td className="border p-2">{user.nama}</td>
                                            <td className="border p-2">{keperluan.nama_kebutuhan}</td>
                                            <td className="border p-2">Rp. {parseFloat(keperluan.jumlah_alokasi).toLocaleString()}</td>
                                        </tr>
                                    ))
                                ))
                            ))
                        ) : (
                            <tr>
                                <td className="border p-2" colSpan="3">Tidak ada data untuk bulan dan tahun yang dipilih.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Admin;
