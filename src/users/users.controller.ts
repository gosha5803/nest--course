import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/userDto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './user.model';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @ApiOperation({summary: 'Создаёт новго пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post() 
    create(@Body() userDto: CreateUserDto) {
        return this.UsersService.createUser(userDto)
    }

    @ApiOperation({summary: 'Возвращает список всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.UsersService.getAllUsers()
    }

}
