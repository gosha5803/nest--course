import {Model, Table, Column, DataType, BelongsToMany} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger/dist'
import { User } from 'src/users/user.model'
import { UserRoles } from './user-roles'

interface RoleCreationProps {
    email: string
    password: string
}

@Table({tableName: 'role'})
export class Role extends Model <Role, RoleCreationProps> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty({example: 'ADMIN', description: 'Значение роли пользователя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @ApiProperty({example: 'Администратор', description: 'Описание роли пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string

    @BelongsToMany(() => User, () => UserRoles)
    users: User[]
}