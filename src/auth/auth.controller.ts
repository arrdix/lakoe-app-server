import { Controller, Post, Body, Patch } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from 'src/auth/dto/login.dto'
import { RegisterDto } from 'src/auth/dto/register.dto'
import { ForgotPasswordDto } from 'src/auth/dto/forgot-password.dto'
import { ResetPasswordDto } from 'src/auth/dto/reset-password.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    create(@Body() registerDto: RegisterDto) {
        return this.authService.register(registerDto)
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @Post('forgot')
    forgot(@Body() forgotPasswordDto: ForgotPasswordDto) {
        return this.authService.forgot(forgotPasswordDto)
    }

    @Patch('reset')
    reset(@Body() resetPasswordDto: ResetPasswordDto) {
        const requester = 'gabi@gmail.com'
        return this.authService.reset({
            password: resetPasswordDto.password,
            requester: requester,
        })
    }
}
