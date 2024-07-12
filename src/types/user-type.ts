import { Cart } from 'src/types/cart-type'

export type User = {
    id: number
    name: string
    email: string
    phone: bigint | string | null
    password: string
    role: string | null
    createdAt: Date
    updatedAt: Date
    carts?: Cart[]
}
