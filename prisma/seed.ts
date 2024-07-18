import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import * as bcrypt from 'bcrypt'

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

        await prisma.users.upsert({
            where: { email: 'seller@lakoe.com' },
            update: {},
            create: {
                id: 666,
                name: 'Seller',
                email: 'seller@lakoe.com',
                phone: '6281081081081',
                password: await bcrypt.hash('seller', 10),
                role: 'SELLER',
            },
        })

        await prisma.users.upsert({
            where: { email: 'buyer1@lakoe.com' },
            update: {},
            create: {
                id: 999,
                name: 'Buyer 1',
                email: 'buyer1@lakoe.com',
                phone: '6281081081081',
                password: await bcrypt.hash('buyer1', 10),
                role: 'BUYER',
            },
        })

        await prisma.users.upsert({
            where: { email: 'buyer2@lakoe.com' },
            update: {},
            create: {
                id: 998,
                name: 'Buyer 2',
                email: 'buyer2@lakoe.com',
                phone: '6281081081081',
                password: await bcrypt.hash('buyer2', 10),
                role: 'BUYER',
            },
        })

        await prisma.users.upsert({
            where: { email: 'buyer3@lakoe.com' },
            update: {},
            create: {
                id: 997,
                name: 'Buyer 3',
                email: 'buyer3@lakoe.com',
                phone: '6281081081081',
                password: await bcrypt.hash('buyer3', 10),
                role: 'BUYER',
            },
        })

        await prisma.users.upsert({
            where: { email: 'buyer4@lakoe.com' },
            update: {},
            create: {
                id: 996,
                name: 'Buyer 4',
                email: 'buyer4@lakoe.com',
                phone: '6281081081081',
                password: await bcrypt.hash('buyer4', 10),
                role: 'BUYER',
            },
        })

        await prisma.users.upsert({
            where: { email: 'buyer5@lakoe.com' },
            update: {},
            create: {
                id: 995,
                name: 'Buyer 5',
                email: 'buyer5@lakoe.com',
                phone: '6281081081081',
                password: await bcrypt.hash('buyer5', 10),
                role: 'BUYER',
            },
        })

        // Categories
        await prisma.categories.upsert({
            where: { id: 666 },
            update: {},
            create: {
                id: 666,
                name: 'Pakaian',
            },
        })

        // Stores
        await prisma.stores.upsert({
            where: { id: 666 },
            update: {},
            create: {
                id: 666,
                name: 'Lakoe Store',
                slogan: 'Slogan Lakoe',
                description: 'Desc lakoe',
                domain: 'example.com',
                logoAttachment: 'example.jpg',
                bannerAttachment: 'example.jpg',
            },
        })

        await prisma.profile.upsert({
            where: { id: 666 },
            update: {},
            create: {
                id: 666,
                userId: 666,
            },
        })

        // Products
        const products = [
            {
                id: 666,
                name: 'Kaos Polos Pria Cotton Combed 32s',
                description:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                attachments: [
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313212/dr0houftw6wu7znsnct1.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313213/t1xr9jd1nh67ox5vdrtq.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313214/wlzunhyzthwjbdkuouxb.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313215/uyadduvivb0egh6pr7xb.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313216/x5vcxiktmiqc5jafnc8d.jpg',
                ],
                minimumOrder: 1,
                url: 'example.com',
                isActive: true,
                categoryId: 666,
            },
            {
                id: 667,
                name: 'Kaos Polos Wanita Cotton Combed 24s',
                description:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                attachments: [
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313213/t1xr9jd1nh67ox5vdrtq.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721313216/x5vcxiktmiqc5jafnc8d.jpg',
                ],
                minimumOrder: 1,
                url: 'example2.com',
                isActive: true,
                categoryId: 666,
            },
            {
                id: 668,
                name: 'Nike Dunk Low Black White Panda GS',
                description:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                attachments: [
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314497/flxqcwbwv2yycraulfwa.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314495/qirak47ay3srjc8du8jv.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314498/qfoizmniixtfh6l9jlp6.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314498/z6vww7jwmft8khd0bbnx.jpg',
                    'http://res.cloudinary.com/dv8vfur0m/image/upload/v1721314500/knm0blqajswfzipz7gxt.jpg',
                ],
                minimumOrder: 1,
                url: 'example3.com',
                isActive: true,
                categoryId: 666,
            },
        ]

        for (const product of products) {
            await prisma.products.upsert({
                where: { id: product.id },
                update: {},
                create: product,
            })
        }

        // Variant Option Values
        const variantOptionValues = [
            {
                id: 666,
                sku: 'SKU_HITAM_EXAMPLE',
                price: 49000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 667,
                sku: 'SKU_MERAH_EXAMPLE',
                price: 90000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 668,
                sku: 'SKU_BIRU_EXAMPLE',
                price: 70000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 669,
                sku: 'SKU_HIJAU_EXAMPLE',
                price: 79000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 670,
                sku: 'SKU_PUTIH_EXAMPLE',
                price: 61000,
                stock: 100,
                weight: 500,
                isActive: true,
            },

            {
                id: 671,
                sku: 'SKU_WOMEN_HIJAU_EXAMPLE',
                price: 79000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 672,
                sku: 'SKU_WOMEN_PUTIH_EXAMPLE',
                price: 61000,
                stock: 100,
                weight: 500,
                isActive: true,
            },

            {
                id: 673,
                sku: 'SKU_NIKE_S_EXAMPLE',
                price: 120000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 674,
                sku: 'SKU_NIKE_M_EXAMPLE',
                price: 130000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
            {
                id: 675,
                sku: 'SKU_NIKE_L_EXAMPLE',
                price: 99000,
                stock: 100,
                weight: 500,
                isActive: true,
            },
        ]

        for (const optionValue of variantOptionValues) {
            await prisma.variantOptionValues.upsert({
                where: { id: optionValue.id },
                update: {},
                create: optionValue,
            })
        }

        // Variants
        const variants = [
            { id: 666, name: 'Warna', isActive: true, productId: 666 },
            { id: 667, name: 'Warna', isActive: true, productId: 667 },
            { id: 668, name: 'Ukuran', isActive: true, productId: 668 },
        ]

        for (const variant of variants) {
            await prisma.variants.upsert({
                where: { id: variant.id },
                update: {},
                create: variant,
            })
        }

        // Variant Options
        const variantOptions = [
            { id: 666, name: 'HITAM', variantId: 666, variantOptionValuesId: 666 },
            { id: 667, name: 'MERAH', variantId: 666, variantOptionValuesId: 667 },
            { id: 668, name: 'BIRU', variantId: 666, variantOptionValuesId: 668 },
            { id: 669, name: 'HIJAU', variantId: 666, variantOptionValuesId: 669 },
            { id: 670, name: 'PUTIH', variantId: 666, variantOptionValuesId: 670 },

            { id: 674, name: 'HIJAU', variantId: 667, variantOptionValuesId: 671 },
            { id: 675, name: 'PUTIH', variantId: 667, variantOptionValuesId: 672 },

            { id: 676, name: 'S', variantId: 668, variantOptionValuesId: 673 },
            { id: 677, name: 'M', variantId: 668, variantOptionValuesId: 674 },
            { id: 678, name: 'L', variantId: 668, variantOptionValuesId: 675 },
        ]

        for (const option of variantOptions) {
            await prisma.variantOptions.upsert({
                where: { id: option.id },
                update: {},
                create: option,
            })
        }

        // Carts
        const carts = [
            { id: 666, price: 666000, discount: 10000, storeId: 666, userId: 999 },
            { id: 667, price: 667000, discount: 20000, storeId: 666, userId: 998 },
            { id: 668, price: 668000, discount: 30000, storeId: 666, userId: 997 },
            { id: 669, price: 669000, discount: 40000, storeId: 666, userId: 996 },
            { id: 670, price: 670000, discount: 50000, storeId: 666, userId: 995 },
        ]

        for (const cart of carts) {
            await prisma.carts.upsert({
                where: { id: cart.id },
                update: cart,
                create: cart,
            })
        }

        // Cart Items
        const cartItems = [
            {
                id: 666,
                qty: 1,
                price: 666000,
                userId: 999,
                cartId: 666,
                variantOptionValueId: 666,
                storeId: 666,
            },
            {
                id: 667,
                qty: 2,
                price: 667000,
                userId: 999,
                cartId: 667,
                variantOptionValueId: 667,
                storeId: 666,
            },
            {
                id: 668,
                qty: 3,
                price: 668000,
                userId: 999,
                cartId: 668,
                variantOptionValueId: 668,
                storeId: 666,
            },
            {
                id: 669,
                qty: 4,
                price: 669000,
                userId: 999,
                cartId: 669,
                variantOptionValueId: 669,
                storeId: 666,
            },
            {
                id: 670,
                qty: 5,
                price: 670000,
                userId: 999,
                cartId: 670,
                variantOptionValueId: 670,
                storeId: 666,
            },
        ]

        for (const item of cartItems) {
            await prisma.cartItems.upsert({
                where: { id: item.id },
                update: {},
                create: item,
            })
        }

        // Invoices
        const invoices = [
            {
                id: 666,
                invoiceNumber: 'INV/666/MPL/666',
                status: 'Belum Dibayar',
                serviceCharge: 3500,
                price: 666000,
                receiverName: 'Buyer Lakoe 1',
                receiverAddress: 'Jl. New York Timur no. 666',
                receiverDistrict: 'Los Angeles',
                receiverLatitude: 1.123123123,
                receiverLongtitude: 3.321321321,
                receiverVillage: 'Cikeas Udik',
                receiverPhone: '6281081081081',
                cartId: 666,
                userId: 999,
            },
            {
                id: 667,
                invoiceNumber: 'INV/667/MPL/667',
                status: 'Pesanan Baru',
                serviceCharge: 4500,
                price: 667000,
                receiverName: 'Buyer Lakoe 2',
                receiverAddress: 'Jl. New York Barat no. 667',
                receiverDistrict: 'Los Angeles',
                receiverLatitude: 2.123123123,
                receiverLongtitude: 4.321321321,
                receiverVillage: 'Cikeas Udik',
                receiverPhone: '6281081081082',
                cartId: 667,
                userId: 999,
            },
            {
                id: 668,
                invoiceNumber: 'INV/668/MPL/668',
                status: 'Siap Dikirim',
                serviceCharge: 5500,
                price: 668000,
                receiverName: 'Buyer Lakoe 3',
                receiverAddress: 'Jl. New York Selatan no. 668',
                receiverDistrict: 'Los Angeles',
                receiverLatitude: 3.123123123,
                receiverLongtitude: 5.321321321,
                receiverVillage: 'Cikeas Udik',
                receiverPhone: '6281081081083',
                cartId: 668,
                userId: 999,
            },
            {
                id: 669,
                invoiceNumber: 'INV/669/MPL/669',
                status: 'Dalam Pengiriman',
                serviceCharge: 6500,
                price: 669000,
                receiverName: 'Buyer Lakoe 4',
                receiverAddress: 'Jl. New York Utara no. 669',
                receiverDistrict: 'Los Angeles',
                receiverLatitude: 4.123123123,
                receiverLongtitude: 6.321321321,
                receiverVillage: 'Cikeas Udik',
                receiverPhone: '6281081081084',
                cartId: 669,
                userId: 999,
            },
            {
                id: 670,
                invoiceNumber: 'INV/670/MPL/670',
                status: 'Pesanan Selesai',
                serviceCharge: 7500,
                price: 670000,
                receiverName: 'Buyer Lakoe 5',
                receiverAddress: 'Jl. New York Tengah no. 670',
                receiverDistrict: 'Los Angeles',
                receiverLatitude: 5.123123123,
                receiverLongtitude: 7.321321321,
                receiverVillage: 'Cikeas Udik',
                receiverPhone: '6281081081085',
                cartId: 670,
                userId: 999,
            },
        ]

        for (const invoice of invoices) {
            await prisma.invoices.upsert({
                where: { id: invoice.id },
                update: {},
                create: invoice,
            })
        }
    })
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
