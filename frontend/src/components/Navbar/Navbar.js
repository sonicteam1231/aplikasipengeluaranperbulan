import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

// Definisikan fungsi untuk mendapatkan tahun dan bulan saat ini
const getCurrentYear = () => new Date().getFullYear();
const getCurrentMonth = () => new Date().getMonth() + 1; // Bulan dimulai dari 0, jadi tambahkan 1

const Navbar = ({ tahunOptions, bulanOptions, penggunaOptions, setTahun, setBulan, setPengguna }) => {
    return (
        <nav className="flex items-center justify-between bg-purple-200 p-4">
            <div className="flex items-center">
                <Dropdown 
                    label="Pilih Tahun" 
                    options={tahunOptions} 
                    onChange={(e) => setTahun(e.target.value)} 
                    defaultValue={getCurrentYear()}
                />
                <Dropdown 
                    label="Pilih Bulan" 
                    options={bulanOptions} 
                    onChange={(e) => setBulan(e.target.value)} 
                    defaultValue={getCurrentMonth()}
                />
            </div>
            <Dropdown 
                label="Pilih Akun" 
                options={penggunaOptions} 
                onChange={(e) => setPengguna(e.target.value)} 
            />
        </nav>
    );
}

export default Navbar;
