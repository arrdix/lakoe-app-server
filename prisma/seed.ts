import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// import * as bcrypt from 'bcrypt'

async function main() {
    await prisma.$transaction(async () => {
        await prisma.roles.upsert({
            where: { id: 666 },
            update: {},
            create: {
                id: 666,
                name: 'SELLER',
            },
        })

        await prisma.roles.upsert({
            where: { id: 999 },
            update: {},
            create: {
                id: 999,
                name: 'BUYER',
            },
        })

        //         await prisma.users.upsert({
        //             where: { email: 'seller@lakoe.com' },
        //             update: {},
        //             create: {
        //                 id: 666,
        //                 name: 'Seller',
        //                 email: 'seller@lakoe.com',
        //                 phone: '6281081081081',
        //                 password: await bcrypt.hash('seller', 10),
        //                 role: 'SELLER',
        //             },
        //         })

        //         await prisma.users.upsert({
        //             where: { email: 'buyer1@lakoe.com' },
        //             update: {},
        //             create: {
        //                 id: 999,
        //                 name: 'Buyer 1',
        //                 email: 'buyer1@lakoe.com',
        //                 phone: '6281081081081',
        //                 password: await bcrypt.hash('buyer1', 10),
        //                 role: 'BUYER',
        //             },
        //         })

        //         await prisma.users.upsert({
        //             where: { email: 'buyer2@lakoe.com' },
        //             update: {},
        //             create: {
        //                 id: 998,
        //                 name: 'Buyer 2',
        //                 email: 'buyer2@lakoe.com',
        //                 phone: '6281081081081',
        //                 password: await bcrypt.hash('buyer2', 10),
        //                 role: 'BUYER',
        //             },
        //         })

        //         await prisma.users.upsert({
        //             where: { email: 'buyer3@lakoe.com' },
        //             update: {},
        //             create: {
        //                 id: 997,
        //                 name: 'Buyer 3',
        //                 email: 'buyer3@lakoe.com',
        //                 phone: '6281081081081',
        //                 password: await bcrypt.hash('buyer3', 10),
        //                 role: 'BUYER',
        //             },
        //         })

        //         await prisma.users.upsert({
        //             where: { email: 'buyer4@lakoe.com' },
        //             update: {},
        //             create: {
        //                 id: 996,
        //                 name: 'Buyer 4',
        //                 email: 'buyer4@lakoe.com',
        //                 phone: '6281081081081',
        //                 password: await bcrypt.hash('buyer4', 10),
        //                 role: 'BUYER',
        //             },
        //         })

        //         await prisma.users.upsert({
        //             where: { email: 'buyer5@lakoe.com' },
        //             update: {},
        //             create: {
        //                 id: 995,
        //                 name: 'Buyer 5',
        //                 email: 'buyer5@lakoe.com',
        //                 phone: '6281081081081',
        //                 password: await bcrypt.hash('buyer5', 10),
        //                 role: 'BUYER',
        //             },
        //         })

        //         // Categories
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
        ]

        for (const category of categories) {
            await prisma.categories.upsert({
                where: { id: category.id },
                update: {},
                create: category,
            })
        }

        //         // Stores
        //         await prisma.stores.upsert({
        //             where: { id: 666 },
        //             update: {},
        //             create: {
        //                 id: 666,
        //                 name: 'Lakoe Store',
        //                 slogan: 'Slogan Lakoe',
        //                 description: 'Desc lakoe',
        //                 domain: 'example.com',
        //                 logoAttachment: 'example.jpg',
        //                 bannerAttachment: 'example.jpg',
        //             },
        //         })

        //         await prisma.profile.upsert({
        //             where: { id: 666 },
        //             update: {},
        //             create: {
        //                 id: 666,
        //                 userId: 666,
        //             },
        //         })

        //         // Products
        //         const products = [
        //             {
        //                 id: 666,
        //                 name: 'Kaos Polos Pria Cotton Combed 32s',
        //                 description:
        //                     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //                 attachments: [
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313212/dr0houftw6wu7znsnct1.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313213/t1xr9jd1nh67ox5vdrtq.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313214/wlzunhyzthwjbdkuouxb.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313215/uyadduvivb0egh6pr7xb.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313216/x5vcxiktmiqc5jafnc8d.jpg',
        //                 ],
        //                 minimumOrder: 1,
        //                 url: 'example.com',
        //                 isActive: true,
        //                 categoryId: 666,
        //                 storeId: 666,
        //             },
        //             {
        //                 id: 667,
        //                 name: 'Kaos Polos Wanita Cotton Combed 24s',
        //                 description:
        //                     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //                 attachments: [
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313213/t1xr9jd1nh67ox5vdrtq.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313216/x5vcxiktmiqc5jafnc8d.jpg',
        //                 ],
        //                 minimumOrder: 1,
        //                 url: 'example2.com',
        //                 isActive: true,
        //                 categoryId: 666,
        //                 storeId: 666,
        //             },
        //             {
        //                 id: 668,
        //                 name: 'Nike Dunk Low Black White Panda GS',
        //                 description:
        //                     'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        //                 attachments: [
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314497/flxqcwbwv2yycraulfwa.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314495/qirak47ay3srjc8du8jv.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314498/qfoizmniixtfh6l9jlp6.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314498/z6vww7jwmft8khd0bbnx.jpg',
        //                     'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314500/knm0blqajswfzipz7gxt.jpg',
        //                 ],
        //                 minimumOrder: 1,
        //                 url: 'example3.com',
        //                 isActive: true,
        //                 categoryId: 666,
        //                 storeId: 666,
        //             },
        //         ]

        //         for (const product of products) {
        //             await prisma.products.upsert({
        //                 where: { id: product.id },
        //                 update: {},
        //                 create: product,
        //             })
        //         }

        //         // Variant Option Values
        //         const variantOptionValues = [
        //             {
        //                 id: 666,
        //                 sku: 'SKU_HITAM_EXAMPLE',
        //                 price: 49000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 667,
        //                 sku: 'SKU_MERAH_EXAMPLE',
        //                 price: 90000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 668,
        //                 sku: 'SKU_BIRU_EXAMPLE',
        //                 price: 70000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 669,
        //                 sku: 'SKU_HIJAU_EXAMPLE',
        //                 price: 79000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 670,
        //                 sku: 'SKU_PUTIH_EXAMPLE',
        //                 price: 61000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },

        //             {
        //                 id: 671,
        //                 sku: 'SKU_WOMEN_HIJAU_EXAMPLE',
        //                 price: 79000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 672,
        //                 sku: 'SKU_WOMEN_PUTIH_EXAMPLE',
        //                 price: 61000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },

        //             {
        //                 id: 673,
        //                 sku: 'SKU_NIKE_S_EXAMPLE',
        //                 price: 120000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 674,
        //                 sku: 'SKU_NIKE_M_EXAMPLE',
        //                 price: 130000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //             {
        //                 id: 675,
        //                 sku: 'SKU_NIKE_L_EXAMPLE',
        //                 price: 99000,
        //                 stock: 100,
        //                 weight: 500,
        //                 isActive: true,
        //             },
        //         ]

        //         for (const optionValue of variantOptionValues) {
        //             await prisma.variantOptionValues.upsert({
        //                 where: { id: optionValue.id },
        //                 update: {},
        //                 create: optionValue,
        //             })
        //         }

        //         // Variants
        //         const variants = [
        //             { id: 666, name: 'Warna', isActive: true, productId: 666 },
        //             { id: 667, name: 'Warna', isActive: true, productId: 667 },
        //             { id: 668, name: 'Ukuran', isActive: true, productId: 668 },
        //         ]

        //         for (const variant of variants) {
        //             await prisma.variants.upsert({
        //                 where: { id: variant.id },
        //                 update: {},
        //                 create: variant,
        //             })
        //         }

        //         // Variant Options
        //         const variantOptions = [
        //             { id: 666, name: 'HITAM', variantId: 666, variantOptionValuesId: 666 },
        //             { id: 667, name: 'MERAH', variantId: 666, variantOptionValuesId: 667 },
        //             { id: 668, name: 'BIRU', variantId: 666, variantOptionValuesId: 668 },
        //             { id: 669, name: 'HIJAU', variantId: 666, variantOptionValuesId: 669 },
        //             { id: 670, name: 'PUTIH', variantId: 666, variantOptionValuesId: 670 },

        //             { id: 674, name: 'HIJAU', variantId: 667, variantOptionValuesId: 671 },
        //             { id: 675, name: 'PUTIH', variantId: 667, variantOptionValuesId: 672 },

        //             { id: 676, name: 'S', variantId: 668, variantOptionValuesId: 673 },
        //             { id: 677, name: 'M', variantId: 668, variantOptionValuesId: 674 },
        //             { id: 678, name: 'L', variantId: 668, variantOptionValuesId: 675 },
        //         ]

        //         for (const option of variantOptions) {
        //             await prisma.variantOptions.upsert({
        //                 where: { id: option.id },
        //                 update: {},
        //                 create: option,
        //             })
        //         }

        //         // Carts
        //         const carts = [
        //             { id: 666, price: 666000, discount: 10000, storeId: 666, userId: 999 },
        //             { id: 667, price: 667000, discount: 20000, storeId: 666, userId: 998 },
        //             { id: 668, price: 668000, discount: 30000, storeId: 666, userId: 997 },
        //             { id: 669, price: 669000, discount: 40000, storeId: 666, userId: 996 },
        //             { id: 670, price: 670000, discount: 50000, storeId: 666, userId: 995 },
        //         ]

        //         for (const cart of carts) {
        //             await prisma.carts.upsert({
        //                 where: { id: cart.id },
        //                 update: cart,
        //                 create: cart,
        //             })
        //         }

        //         // Cart Items
        //         const cartItems = [
        //             {
        //                 id: 666,
        //                 qty: 1,
        //                 price: 666000,
        //                 userId: 999,
        //                 cartId: 666,
        //                 variantOptionValueId: 666,
        //                 storeId: 666,
        //             },
        //             {
        //                 id: 667,
        //                 qty: 2,
        //                 price: 667000,
        //                 userId: 999,
        //                 cartId: 667,
        //                 variantOptionValueId: 667,
        //                 storeId: 666,
        //             },
        //             {
        //                 id: 668,
        //                 qty: 3,
        //                 price: 668000,
        //                 userId: 999,
        //                 cartId: 668,
        //                 variantOptionValueId: 668,
        //                 storeId: 666,
        //             },
        //             {
        //                 id: 669,
        //                 qty: 4,
        //                 price: 669000,
        //                 userId: 999,
        //                 cartId: 669,
        //                 variantOptionValueId: 669,
        //                 storeId: 666,
        //             },
        //             {
        //                 id: 670,
        //                 qty: 5,
        //                 price: 670000,
        //                 userId: 999,
        //                 cartId: 670,
        //                 variantOptionValueId: 670,
        //                 storeId: 666,
        //             },
        //         ]

        //         for (const item of cartItems) {
        //             await prisma.cartItems.upsert({
        //                 where: { id: item.id },
        //                 update: {},
        //                 create: item,
        //             })
        //         }

        //         const couriers = [
        //             {
        //                 id: 666,
        //                 courierCode: 'EXAMPLE_COURIER_CODE_1',
        //                 courierServiceCode: 'EXAMPLE_SERVICE_GJK_1',
        //                 courierServiceName: 'EXAMPLE_GOJEK_1',
        //                 price: 21000,
        //             },
        //             {
        //                 id: 667,
        //                 courierCode: 'EXAMPLE_COURIER_CODE_2',
        //                 courierServiceCode: 'EXAMPLE_SERVICE_GJK_2',
        //                 courierServiceName: 'EXAMPLE_GOJEK_2',
        //                 price: 21000,
        //             },
        //             {
        //                 id: 668,
        //                 courierCode: 'EXAMPLE_COURIER_CODE_3',
        //                 courierServiceCode: 'EXAMPLE_SERVICE_GJK_3',
        //                 courierServiceName: 'EXAMPLE_GOJEK_3',
        //                 price: 21000,
        //             },
        //             {
        //                 id: 669,
        //                 courierCode: 'EXAMPLE_COURIER_CODE_4',
        //                 courierServiceCode: 'EXAMPLE_SERVICE_GJK_4',
        //                 courierServiceName: 'EXAMPLE_GOJEK_4',
        //                 price: 21000,
        //             },
        //             {
        //                 id: 670,
        //                 courierCode: 'EXAMPLE_COURIER_CODE_5',
        //                 courierServiceCode: 'EXAMPLE_SERVICE_GJK_5',
        //                 courierServiceName: 'EXAMPLE_GOJEK_5',
        //                 price: 21000,
        //             },
        //         ]

        //         for (const courier of couriers) {
        //             await prisma.couriers.upsert({
        //                 where: {
        //                     id: courier.id,
        //                 },
        //                 update: {},
        //                 create: courier,
        //             })
        //         }

        //         // Invoices
        //         const invoices = [
        //             {
        //                 id: 666,
        //                 invoiceNumber: 'INV/666/MPL/666',
        //                 status: 'Belum Dibayar',
        //                 serviceCharge: 3500,
        //                 price: 666000,
        //                 receiverName: 'Buyer Lakoe 1',
        //                 receiverAddress: 'Jl. New York Timur no. 666',
        //                 receiverDistrict: 'Los Angeles',
        //                 receiverLatitude: 1.123123123,
        //                 receiverLongtitude: 3.321321321,
        //                 receiverVillage: 'Cikeas Udik',
        //                 receiverPhone: '6281081081081',
        //                 receiverEmail: 'example1@gmail.com',
        //                 cartId: 666,
        //                 courierId: 666,
        //                 userId: 999,
        //             },
        //             {
        //                 id: 667,
        //                 invoiceNumber: 'INV/667/MPL/667',
        //                 status: 'Pesanan Baru',
        //                 serviceCharge: 4500,
        //                 price: 667000,
        //                 receiverName: 'Buyer Lakoe 2',
        //                 receiverAddress: 'Jl. New York Barat no. 667',
        //                 receiverDistrict: 'Los Angeles',
        //                 receiverLatitude: 2.123123123,
        //                 receiverLongtitude: 4.321321321,
        //                 receiverVillage: 'Cikeas Udik',
        //                 receiverPhone: '6281081081082',
        //                 receiverEmail: 'example2@gmail.com',
        //                 cartId: 667,
        //                 courierId: 667,
        //                 userId: 999,
        //             },
        //             {
        //                 id: 668,
        //                 invoiceNumber: 'INV/668/MPL/668',
        //                 status: 'Siap Dikirim',
        //                 serviceCharge: 5500,
        //                 price: 668000,
        //                 receiverName: 'Buyer Lakoe 3',
        //                 receiverAddress: 'Jl. New York Selatan no. 668',
        //                 receiverDistrict: 'Los Angeles',
        //                 receiverLatitude: 3.123123123,
        //                 receiverLongtitude: 5.321321321,
        //                 receiverVillage: 'Cikeas Udik',
        //                 receiverPhone: '6281081081083',
        //                 receiverEmail: 'example3@gmail.com',
        //                 cartId: 668,
        //                 courierId: 668,
        //                 userId: 999,
        //             },
        //             {
        //                 id: 669,
        //                 invoiceNumber: 'INV/669/MPL/669',
        //                 status: 'Dalam Pengiriman',
        //                 serviceCharge: 6500,
        //                 price: 669000,
        //                 receiverName: 'Buyer Lakoe 4',
        //                 receiverAddress: 'Jl. New York Utara no. 669',
        //                 receiverDistrict: 'Los Angeles',
        //                 receiverLatitude: 4.123123123,
        //                 receiverLongtitude: 6.321321321,
        //                 receiverVillage: 'Cikeas Udik',
        //                 receiverPhone: '6281081081084',
        //                 receiverEmail: 'example4@gmail.com',
        //                 cartId: 669,
        //                 courierId: 669,
        //                 userId: 999,
        //             },
        //             {
        //                 id: 670,
        //                 invoiceNumber: 'INV/670/MPL/670',
        //                 status: 'Pesanan Selesai',
        //                 serviceCharge: 7500,
        //                 price: 670000,
        //                 receiverName: 'Buyer Lakoe 5',
        //                 receiverAddress: 'Jl. New York Tengah no. 670',
        //                 receiverDistrict: 'Los Angeles',
        //                 receiverLatitude: 5.123123123,
        //                 receiverLongtitude: 7.321321321,
        //                 receiverVillage: 'Cikeas Udik',
        //                 receiverPhone: '6281081081085',
        //                 receiverEmail: 'example5@gmail.com',
        //                 cartId: 670,
        //                 courierId: 670,
        //                 userId: 999,
        //             },
        //         ]

        //         for (const invoice of invoices) {
        //             await prisma.invoices.upsert({
        //                 where: { id: invoice.id },
        //                 update: {},
        //                 create: invoice,
        //             })
        //         }
    })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
