"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.$transaction(async () => {
        await prisma.roles.upsert({
            where: { id: 666 },
            update: {},
            create: {
                id: 666,
                name: 'SELLER',
            },
        });
        await prisma.roles.upsert({
            where: { id: 999 },
            update: {},
            create: {
                id: 999,
                name: 'BUYER',
            },
        });
        const categories = [
            { id: 666, name: 'Hoodie' },
            { id: 667, name: 'Jaket' },
            { id: 668, name: 'Kaos' },
            { id: 669, name: 'Sneaker' },
            { id: 670, name: 'Celana' },
            { id: 671, name: 'Sepatu' },
            { id: 672, name: 'Tas' },
            { id: 673, name: 'Topi' },
            { id: 674, name: 'Kacamata' },
            { id: 675, name: 'Jam Tangan' },
            { id: 676, name: 'Aksesoris' },
            { id: 677, name: 'Pakaian Olahraga' },
            { id: 678, name: 'Jersey' },
            { id: 679, name: 'Pakaian Anak' },
            { id: 680, name: 'Sepatu Anak' },
            { id: 681, name: 'Mainan Anak' },
            { id: 682, name: 'Elektronik' },
            { id: 683, name: 'Smartphone' },
            { id: 684, name: 'Tablet' },
            { id: 685, name: 'Laptop' },
            { id: 686, name: 'Komputer' },
            { id: 687, name: 'Peralatan Komputer' },
            { id: 688, name: 'Aksesoris Komputer' },
            { id: 689, name: 'Kamera' },
            { id: 690, name: 'Lensa Kamera' },
            { id: 691, name: 'Peralatan Fotografi' },
            { id: 692, name: 'Audio' },
            { id: 693, name: 'Headphone' },
            { id: 694, name: 'Speaker' },
            { id: 695, name: 'Gaming' },
            { id: 696, name: 'Konsol Game' },
            { id: 697, name: 'Peralatan Gaming' },
            { id: 698, name: 'TV' },
            { id: 699, name: 'Peralatan Rumah Tangga' },
            { id: 700, name: 'Furniture' },
            { id: 701, name: 'Dapur' },
            { id: 702, name: 'Peralatan Masak' },
            { id: 703, name: 'Peralatan Makan' },
            { id: 704, name: 'Dekorasi Rumah' },
            { id: 705, name: 'Alat Kebersihan' },
            { id: 706, name: 'Kesehatan' },
            { id: 707, name: 'Perawatan Kesehatan' },
            { id: 708, name: 'Peralatan Medis' },
            { id: 709, name: 'Kosmetik' },
            { id: 710, name: 'Perawatan Kulit' },
            { id: 711, name: 'Perawatan Rambut' },
            { id: 712, name: 'Parfum' },
            { id: 713, name: 'Perawatan Tubuh' },
            { id: 714, name: 'Fashion Pria' },
            { id: 715, name: 'Fashion Wanita' },
            { id: 716, name: 'Baju Tidur' },
            { id: 717, name: 'Pakaian Dalam' },
            { id: 718, name: 'Pakaian Renang' },
            { id: 719, name: 'Perhiasan' },
            { id: 720, name: 'Cincin' },
            { id: 721, name: 'Gelang' },
            { id: 722, name: 'Kalung' },
            { id: 723, name: 'Anting' },
            { id: 724, name: 'Makanan' },
            { id: 725, name: 'Minuman' },
            { id: 726, name: 'Snack' },
            { id: 727, name: 'Makanan Sehat' },
            { id: 728, name: 'Suplemen' },
            { id: 729, name: 'Buku' },
            { id: 730, name: 'Alat Tulis' },
            { id: 731, name: 'Perlengkapan Kantor' },
            { id: 732, name: 'Olahraga' },
            { id: 733, name: 'Peralatan Olahraga' },
            { id: 734, name: 'Sepeda' },
            { id: 735, name: 'Aksesoris Sepeda' },
            { id: 736, name: 'Outdoor' },
            { id: 737, name: 'Camping' },
            { id: 738, name: 'Hiking' },
            { id: 739, name: 'Travel' },
            { id: 740, name: 'Koper' },
            { id: 741, name: 'Ransel' },
            { id: 742, name: 'Fashion Muslim' },
            { id: 743, name: 'Gamis' },
            { id: 744, name: 'Hijab' },
            { id: 745, name: 'Koko' },
            { id: 746, name: 'Sarung' },
            { id: 747, name: 'Keperluan Bayi' },
            { id: 748, name: 'Pakaian Bayi' },
            { id: 749, name: 'Peralatan Makan Bayi' },
            { id: 750, name: 'Popok' },
            { id: 751, name: 'Mainan Bayi' },
            { id: 752, name: 'Pertanian' },
            { id: 753, name: 'Peralatan Pertanian' },
            { id: 754, name: 'Benih' },
            { id: 755, name: 'Pupuk' },
            { id: 756, name: 'Produk Perikanan' },
            { id: 757, name: 'Otomotif' },
            { id: 758, name: 'Aksesoris Mobil' },
            { id: 759, name: 'Aksesoris Motor' },
        ];
        for (const category of categories) {
            await prisma.categories.upsert({
                where: { id: category.id },
                update: {},
                create: category,
            });
        }
    });
}
main()
    .catch((e) => {
    throw e;
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map