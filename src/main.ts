import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import CONFIG from './configs/config'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors()

    await app.listen(CONFIG.PORT)
}
bootstrap()

export default bootstrap
