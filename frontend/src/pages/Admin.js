import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import axios from 'axios';

const Admin = ({ bulan, tahun }) => {
    const [data, setData] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);

    const [keperluanData, setKeperluandata] = useState({
        gaji: 0,
        belanjaBulanan: 0,
        anakPertama: 0,
        anakKedua: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/pengguna?bulan=${bulan}&tahun=${tahun}`);
                console.log("Response dari /api/pengguna:", response.data);

                let totalGaji = 0;
                let totalBelanjaBulanan = 0;
                let totalAnakPertama = 0;
                let totalAnakKedua = 0;

                response.data.forEach(user => {
                    user.Gajis.forEach(gaji => {
                        totalGaji += parseFloat(gaji.jumlah_total); // Mengambil jumlah_total dari gaji
                        gaji.Kebutuhans.forEach(keperluan => {
                            switch (keperluan.nama_kebutuhan.toLowerCase()) {
                                case 'belanja bulanan':
                                    totalBelanjaBulanan += parseFloat(keperluan.jumlah_alokasi);
                                    break;
                                case 'uang anak pertama':
                                    totalAnakPertama += parseFloat(keperluan.jumlah_alokasi);
                                    break;
                                case 'uang anak kedua':
                                    totalAnakKedua += parseFloat(keperluan.jumlah_alokasi);
                                    break;
                                default:
                                    console.log("Keperluan tidak dikenali:", keperluan.nama_kebutuhan);
                                    break;
                            }
                        });
                    });
                });

                console.log("Total Gaji:", totalGaji);
                console.log("Total Belanja Bulanan:", totalBelanjaBulanan);
                console.log("Total Anak Pertama:", totalAnakPertama);
                console.log("Total Anak Kedua:", totalAnakKedua);

                setKeperluandata({
                    gaji: totalGaji,
                    belanjaBulanan: totalBelanjaBulanan,
                    anakPertama: totalAnakPertama,
                    anakKedua: totalAnakKedua
                });

                setData(response.data);
            } catch (error) {
                console.error('Error fetching admin data', error);
            }
        };

        fetchData();
    }, [tahun, bulan]);

    return (
        <div className="p-4 m-4 bg-white rounded shadow">
            <Button onClick={() => setModalOpen(true)}>ADD NEW</Button>
            <div className="flex flex-wrap gap-4 my-4">
                <Card title="gaji" amount={`${keperluanData.gaji.toLocaleString()}`} color="bg-yellow-200" />
                <Card title="belanja bulanan" amount={`${keperluanData.belanjaBulanan.toLocaleString()}`} color="bg-yellow-200" />
                <Card title="anak pertama" amount={`${keperluanData.anakPertama.toLocaleString()}`} color="bg-yellow-200" />
                <Card title="anak kedua" amount={`${keperluanData.anakKedua.toLocaleString()}`} color="bg-yellow-200" />
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
