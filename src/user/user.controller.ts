import { Controller, Get, Body, Patch, Param, Delete, Res } from '@nestjs/common'
import { UserService } from './user.service'
import { UpdateUserDto } from './dto/update-user.dto'
import { Response } from 'express'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('logged')
    async getLoggedUser(@Res() res: Response) {
        const loggedUserId = res.locals.user.id
        const loggedUser = await this.userService.getLoggedUser(loggedUserId)

        return res.status(200).send(loggedUser)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id)
    }
}
