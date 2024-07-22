import { Module } from '@nestjs/common'
import { MidtransController } from 'src/midtrans/midtrans.controller'
import { MidtransService } from 'src/midtrans/midtrans.service'

@Module({
    controllers: [MidtransController],
    providers: [MidtransService],
})
export class MidtransModule {}
