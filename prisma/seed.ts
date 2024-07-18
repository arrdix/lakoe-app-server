import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import * as bcrypt from 'bcrypt'

async function main() {
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
        where: { email: 'buyer@lakoe.com' },
        update: {},
        create: {
            id: 999,
            name: 'Buyer',
            email: 'buyer@lakoe.com',
            phone: '6281081081081',
            password: await bcrypt.hash('buyer', 10),
            role: 'BUYER',
        },
    })

    await prisma.categories.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            name: 'Pakaian',
        },
    })

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

    await prisma.products.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            name: 'Kaos Polos',
            description: 'Deskripsi kaos polos',
            attachments: ['example.jpg'],
            minimumOrder: 1,
            url: 'example.com',
            isActive: true,
            categoryId: 666,
        },
    })

    await prisma.variantOptionValues.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            sku: 'SKU_HITAM_EXAMPLE',
            price: 69000,
            stock: 100,
            weight: 500,
            isActive: true,
        },
    })

    await prisma.variantOptionValues.upsert({
        where: { id: 999 },
        update: {},
        create: {
            id: 999,
            sku: 'SKU_PUTIH_EXAMPLE',
            price: 999999,
            stock: 100,
            weight: 500,
            isActive: true,
        },
    })

    await prisma.variants.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            name: 'Warna',
            isActive: true,
            productId: 666,
        },
    })

    await prisma.variantOptions.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            name: 'HITAM',
            variantId: 666,
            variantOptionValuesId: 666,
        },
    })

    await prisma.variantOptions.upsert({
        where: { id: 999 },
        update: {},
        create: {
            id: 999,
            name: 'PUTIH',
            variantId: 666,
            variantOptionValuesId: 999,
        },
    })

    await prisma.carts.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            price: 666000,
            discount: 10000,
            storeId: 666,
            userId: 999,
        },
    })

    await prisma.cartItems.upsert({
        where: { id: 666 },
        update: {},
        create: {
            id: 666,
            qty: 1,
            price: 666000,
            userId: 999,
            cartId: 666,
            variantOptionValueId: 666,
            storeId: 666,
        },
    })

    // await prisma.invoices.upsert({
    //     where: { id: 666 },
    //     update: {},
    //     create: {
    //         id: 666,
    //         invoiceNumber: 'INV/666/MPL/666',
    //         status: 'Belum Dibayar',
    //         serviceCharge: 3500,
    //         price: 666000,
    //         receiverName: 'Buyer Lakoe',
    //         receiverAddress: 'Jl. New York Timur no. 666',
    //         receiverDistrict: 'Los Angeles',
    //         receiverLatitude: 1.123123123,
    //         receiverLongtitude: 3.321321321,
    //         receiverPhone: '6281081081081',
    //         cartId: 666,
    //         userId: 999,
    //     },
    // })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
