import { Injectable } from '@nestjs/common'
import { LoginDto } from '../auth/dto/login.dto'
import Hasher from '../utils/Hasher'
import { mailer } from '../utils/Mailer'
import { RegisterDto } from '../auth/dto/register.dto'
import { PrismaService } from '../prisma/prisma.service'
import { CartService } from '../cart/cart.service'
import { User } from '../types/user-type'
import { UserService } from '../user/user.service'
import * as jwt from 'jsonwebtoken'
import CONFIG from '../configs/config'
import { ForgotPasswordDto } from './dto/forgot-password.dto'
import { ResetPasswordDto } from './dto/reset-password.dto'

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly cartService: CartService,
        private readonly userService: UserService
    ) {}

    async register(registerDto: RegisterDto) {
        // hash the password
        const hashedPassword = await Hasher.hashPassword(registerDto.password)

        // create new user
        const createdUser: User = await this.prismaService.users.create({
            data: {
                ...registerDto,
                password: hashedPassword,
            },
        })

        // create profile for new user
        this.createProfile(createdUser.id)

        return {
            status: 'Ok!',
        }
    }

    async createProfile(userId: number) {
        return await this.prismaService.profile.create({
            data: {
                userId,
            },
        })
    }

    async login(loginDto: LoginDto) {
        const requestedUser: User = await this.prismaService.users.findFirst({
            where: {
                email: loginDto.email,
            },
        })

        if (!requestedUser) {
            return {
                status: 'Wrong username/password.',
            }
        }

        const isPasswordMatch = await Hasher.comparePassword(
            loginDto.password,
            requestedUser.password
        )

        if (!isPasswordMatch) {
            return {
                status: 'Wrong username/password.',
            }
        }

        delete requestedUser.email
        delete requestedUser.phone
        delete requestedUser.password

        return {
            token: jwt.sign(requestedUser, CONFIG.SECRET_SAUCE),
        }
    }

    async forgot(forgotPasswordDto: ForgotPasswordDto) {
        const requestedUser = await this.prismaService.users.findFirst({
            where: {
                email: forgotPasswordDto.email,
            },
        })

        if (!requestedUser) {
            throw new Error(`User with email ${forgotPasswordDto.email} doesn't exist.`)
        }

        const token = jwt.sign(requestedUser, CONFIG.SECRET_SAUCE)
        mailer(forgotPasswordDto.email, token)

        delete requestedUser.email
        delete requestedUser.phone
        delete requestedUser.password

        return {
            token,
        }
    }

    async reset(resetPasswordDto: ResetPasswordDto, requesterId: number) {
        const requestedUser = await this.prismaService.users.update({
            where: {
                id: requesterId,
            },
            data: {
                password: await Hasher.hashPassword(resetPasswordDto.password),
            },
        })

        return requestedUser
    }
}
