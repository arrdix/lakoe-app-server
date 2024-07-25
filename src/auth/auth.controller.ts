import { Controller, Post, Body, Patch, Res } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { RegisterDto } from './dto/register.dto'
import { ForgotPasswordDto } from './dto/forgot-password.dto'
import { ResetPasswordDto } from './dto/reset-password.dto'
import { Response } from 'express'

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
    reset(@Body() resetPasswordDto: ResetPasswordDto, @Res() res: Response) {
        const requesterId = res.locals.user.id
        return this.authService.reset(resetPasswordDto, requesterId)
    }
}
