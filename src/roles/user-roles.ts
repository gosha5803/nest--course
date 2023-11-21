import {Model, Table, Column, DataType, ForeignKey} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger/dist'
import { User } from 'src/users/user.model'
import { Role } from './roles.model'

@Table({tableName: 'user_role', createdAt: false, updatedAt: false})
export class UserRoles extends Model <UserRoles> {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number

}