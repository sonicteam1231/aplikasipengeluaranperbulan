import { Sequelize, DataTypes } from 'sequelize';

// Gunakan MySQL
const sequelize = new Sequelize('aplikasipengeluaran2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Pengguna = sequelize.define('Pengguna', {
    nama: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    kata_sandi: { type: DataTypes.STRING, allowNull: false },
    peran: { type: DataTypes.ENUM('admin', 'anggota_keluarga'), allowNull: false }
});

const Gaji = sequelize.define('Gaji', {
    id_pengguna: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Pengguna',
            key: 'id'
        }
    },
    bulan_tahun: { type: DataTypes.DATE, allowNull: false },
    jumlah_total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    jumlah_sisa: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
});

const Kebutuhan = sequelize.define('Kebutuhan', {
    id_gaji: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Gaji',
            key: 'id'
        }
    },
    nama_kebutuhan: { type: DataTypes.STRING, allowNull: false },
    jumlah_alokasi: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    id_pengguna: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Pengguna',
            key: 'id'
        }
    }
});

const Pengeluaran = sequelize.define('Pengeluaran', {
    id_kebutuhan: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            model: 'Kebutuhan',
            key: 'id'
        }
    },
    tanggal_pengeluaran: { type: DataTypes.DATE, allowNull: false },
    jumlah_pengeluaran: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    deskripsi: { type: DataTypes.STRING }
});

const Tabungan = sequelize.define('Tabungan', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true 
    },
    id_pengguna: { 
        type: DataTypes.INTEGER, 
        references: {
            model: 'Pengguna', 
            key: 'id'
        },
        allowNull: false 
    },
    bulan: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    tahun: { 
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    jumlah: { 
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false 
    }
});

Pengguna.hasMany(Gaji, { foreignKey: 'id_pengguna' });
Gaji.belongsTo(Pengguna, { foreignKey: 'id_pengguna' });

Gaji.hasMany(Kebutuhan, { foreignKey: 'id_gaji' });
Kebutuhan.belongsTo(Gaji, { foreignKey: 'id_gaji' });

Kebutuhan.hasMany(Pengeluaran, { foreignKey: 'id_kebutuhan' });
Pengeluaran.belongsTo(Kebutuhan, { foreignKey: 'id_kebutuhan' });

Pengguna.hasMany(Kebutuhan, { foreignKey: 'id_pengguna' });
Kebutuhan.belongsTo(Pengguna, { foreignKey: 'id_pengguna' });

Pengguna.hasMany(Tabungan, { foreignKey: 'id_pengguna' });
Tabungan.belongsTo(Pengguna, { foreignKey: 'id_pengguna' });

await sequelize.sync();

export { Pengguna, Gaji, Kebutuhan, Pengeluaran, Tabungan, sequelize };
