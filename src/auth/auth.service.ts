import { Injectable } from '@nestjs/common'
import { LoginDto } from 'src/auth/dto/login.dto'
import Hasher from 'src/utils/Hasher'
import { mailer } from 'src/utils/Mailer'
import { RegisterDto } from 'src/auth/dto/register.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CartService } from 'src/cart/cart.service'
import { User } from 'src/types/user-type'
import { UserService } from 'src/user/user.service'
import * as jwt from 'jsonwebtoken'
import CONFIG from 'src/configs/config'
import { ForgotPasswordDto } from 'src/auth/dto/forgot-password.dto'
import { ResetPasswordDto } from 'src/auth/dto/reset-password.dto'

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

        // create default cart for new user
        this.cartService.create({
            price: 0,
            discount: 0,
            userId: createdUser.id,
            storeId: null,
        })

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
            return {
                error: `User with email ${forgotPasswordDto.email} doesn't exist.`,
            }
        }

        // call send email
        mailer(forgotPasswordDto.email)

        delete requestedUser.email
        delete requestedUser.phone
        delete requestedUser.password

        return {
            token: jwt.sign(requestedUser, CONFIG.SECRET_SAUCE),
        }
    }

    async reset(resetPasswordDto: ResetPasswordDto) {
        const requestedUser = await this.prismaService.users.update({
            where: {
                email: resetPasswordDto.requester,
            },
            data: {
                password: await Hasher.hashPassword(resetPasswordDto.password),
            },
        })

        return requestedUser
    }
}
