import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Admin from './Admin';
import Istri from './Istri';

const Home = () => {
    const [tahun, setTahun] = useState('');
    const [bulan, setBulan] = useState('');
    const [pengguna, setPengguna] = useState('admin');  // Default ke admin untuk testing

    const tahunOptions = [
        { label: '2024', value: '2024' },
        { label: '2023', value: '2023' },
        { label: '2022', value: '2022' }
    ];

    const bulanOptions = [
        { label: 'Januari', value: '1' },
        { label: 'Februari', value: '2' },
        { label: 'Maret', value: '3' },
        { label: 'April', value: '4' },
        { label: 'Mei', value: '5' },
        { label: 'Juni', value: '6' },
        { label: 'Juli', value: '7' },
        { label: 'Agustus', value: '8' },
        { label: 'September', value: '9' },
        { label: 'Oktober', value: '10' },
        { label: 'November', value: '11' },
        { label: 'Desember', value: '12' }
    ];

    const penggunaOptions = [
        { label: 'Admin', value: 'admin' },
        { label: 'Istri', value: 'istri' },
        { label: 'Anak Pertama', value: 'anak_pertama' },
        { label: 'Anak Kedua', value: 'anak_kedua' }
    ];

    return (
        <div className="h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar 
                    tahunOptions={tahunOptions}
                    bulanOptions={bulanOptions}
                    penggunaOptions={penggunaOptions}
                    setTahun={setTahun}
                    setBulan={setBulan}
                    setPengguna={setPengguna}
                />
                <main className="flex-1 bg-gray-50 p-4 m-4 rounded shadow">
                    {pengguna === 'admin' && <Admin bulan={bulan} tahun={tahun} />}
                    {pengguna === 'istri' && <Istri />}
                    {/* Konten untuk pengguna lainnya bisa ditambahkan di sini */}
                </main>
            </div>
        </div>
    );
}

export default Home;
