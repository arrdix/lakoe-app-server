import { CartItem } from 'src/types/cart-item-type'

export type Cart = {
    id: number
    price: number
    discount: number
    userId: number
    storeId: number | null
    cartItems?: CartItem[]
}
