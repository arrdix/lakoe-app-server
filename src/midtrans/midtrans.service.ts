import { Injectable } from '@nestjs/common'
import CONFIG from 'src/configs/config'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { Midtrans } from '@miwone/midtrans-client-typescript'

@Injectable()
export class MidtransService {
    async create(createTransactionDto: CreateTransactionDto) {
        const snap = new Midtrans.Snap({
            clientKey: CONFIG.MIDTRANS_CLIENT_KEY,
            serverKey: CONFIG.MIDTRANS_SERVER_KEY,
            isProduction: false,
        })

        const transactionParameter = {
            ...createTransactionDto,
            credit_card: {
                secure: true,
            },
        }

        const transaction = await snap.createTransaction(transactionParameter)

        return transaction

        // const trans: CreateTransactionDto = {
        //     transaction_details: {
        //         order_id: 'INV/0001',
        //         gross_amount: 1,
        //     },
        //     credit_cart: {
        //         secure: false,
        //     },
        //     customer_detail: {
        //         email: 'mail.ardix@gmail',
        //         first_name: 'Ardi',
        //         last_name: 'Yudistira',
        //         phone: 62813333,
        //     },
        // }

        // const res = await axios.post(CONFIG.MIDTRANS_ENDPOINT, trans, {
        //     headers: {
        //         Authorization: `Basic ${btoa(CONFIG.MIDTRANS_SERVER_KEY)}`,
        //     },
        // })

        // return res.data
    }
}
