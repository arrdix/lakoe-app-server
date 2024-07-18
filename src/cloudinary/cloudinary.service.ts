// cloudinary.service.ts

import { Injectable } from '@nestjs/common'
import { v2 as cloudinary } from 'cloudinary'
import { CloudinaryResponse } from './type/cloudinay-response'
import { Readable } from 'stream'

@Injectable()
export class CloudinaryService {
    async uploadFile(file: Express.Multer.File) {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
                if (error) return reject(error)
                resolve(result as CloudinaryResponse)
            })

            const stream = Readable.from(file.buffer)
            stream.pipe(uploadStream)
        })
    }
}
