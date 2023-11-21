import {Model, Table, Column, DataType, BelongsToMany} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger/dist'
import { Role } from 'src/roles/roles.model'
import { UserRoles } from 'src/roles/user-roles'

interface UserCreationProps {
    email: string
    password: string
}

@Table({tableName: 'user-model'})
export class User extends Model <User, UserCreationProps> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string

    @ApiProperty({example: '1234567', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string

    @ApiProperty({example: 'true', description: 'Забанен ли пользователь'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isBanned: boolean

    @ApiProperty({example: 'За непослушание', description: 'Причина блокировки'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}