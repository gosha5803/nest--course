import { Injectable, Post, Inject } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize'
import { CreateUserDto } from 'src/dto/userDto';
import { User } from './user.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User) private userRepository: typeof User
        ) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll()
        return users 
    }
}
