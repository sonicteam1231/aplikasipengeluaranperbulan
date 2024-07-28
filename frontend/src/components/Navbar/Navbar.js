import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = ({ tahunOptions, bulanOptions, penggunaOptions, setTahun, setBulan, setPengguna }) => {
    return (
        <nav className="flex items-center justify-between bg-purple-200 p-4">
            <div className="flex items-center">
                <Dropdown 
                    label="Pilih Tahun" 
                    options={tahunOptions} 
                    onChange={(e) => setTahun(e.target.value)} 
                />
                <Dropdown 
                    label="Pilih Bulan" 
                    options={bulanOptions} 
                    onChange={(e) => setBulan(e.target.value)} 
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
