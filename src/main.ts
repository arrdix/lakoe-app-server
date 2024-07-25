import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// import CONFIG from './configs/config'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as express from 'express'

const server = express()

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server))
    app.enableCors()
    await app.init() // Initialize the app without listening to a port
}

// Call the bootstrap function
bootstrap()

// Export the server for Vercel to use
export const app = server
