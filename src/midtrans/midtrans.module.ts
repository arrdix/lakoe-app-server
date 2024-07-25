import { Module } from '@nestjs/common'
import { MidtransController } from '../midtrans/midtrans.controller'
import { MidtransService } from '../midtrans/midtrans.service'

@Module({
    controllers: [MidtransController],
    providers: [MidtransService],
})
export class MidtransModule {}
