import { Injectable } from '@nestjs/common'
import { CreateCourierDto } from './dto/create-courier.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateCourierDto } from './dto/update-courier.dto'
import { GetRatesDto } from './dto/get-rates.dto'
import axios from 'axios'
import CONFIG from 'src/configs/config'
import { ReqPickupDto } from 'src/courier/dto/req-pickup.dto'
import { OrderService } from 'src/order/order.service'

@Injectable()
export class CourierService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly orderService: OrderService
    ) {}

    async create(createCourierDto: CreateCourierDto) {
        return await this.prismaService.couriers.create({
            data: createCourierDto,
        })
    }

    async getRates(getRatesDto: GetRatesDto) {
        const response = await axios.post(
            'https://api.biteship.com/v1/rates/couriers',
            getRatesDto,
            {
                headers: {
                    Authorization: CONFIG.BITESHIP_API_KEY,
                },
            }
        )

        const courierData = response.data.pricing.map((courier) => {
            return {
                courierCode: courier.courier_code,
                serviceCode: courier.courier_service_code,
                serviceName: courier.courier_service_name,
                courierPrice: courier.price,
            }
        })

        console.log('courier data:', courierData)

        return courierData
    }

    async reqPickup(reqPickupDto: ReqPickupDto) {
        const response = await axios.post('https://api.biteship.com/v1/orders', reqPickupDto, {
            headers: {
                Authorization: CONFIG.BITESHIP_API_KEY,
            },
        })

        const pickupData = response.data

        if (!pickupData) {
            throw new Error('Error when requesting a delivery pickup.')
        }

        await this.orderService.update(reqPickupDto.invoice_id, {
            status: 'Dalam Pengiriman',
            waybill: pickupData.courier.waybill_id,
        })

        return {
            id: pickupData.id,
            shipper: pickupData.shipper,
            originName: pickupData.origin.contact_name,
            courier: {
                trackingId: pickupData.courier.tracking_id,
                waybillId: pickupData.courier.waybill_id,
                company: pickupData.courier.company,
            },
        }
    }

    async statusUpdate(waybill: string, status: string) {
        if (status === 'delivered') {
            const requestedInvoice = await this.orderService.findOneByWaybill(waybill)

            return await this.orderService.update(requestedInvoice.id, {
                status: 'Pesanan Selesai',
            })
        }

        return null
    }

    async findAll() {
        return await this.prismaService.couriers.findMany()
    }

    async findOne(id: number) {
        return await this.prismaService.couriers.findFirst({
            where: {
                id,
            },
        })
    }

    update(id: number, updateCourierDto: UpdateCourierDto) {
        return this.prismaService.couriers.update({
            where: {
                id,
            },
            data: updateCourierDto,
        })
    }

    remove(id: number) {
        return this.prismaService.couriers.delete({
            where: {
                id,
            },
        })
    }
}
