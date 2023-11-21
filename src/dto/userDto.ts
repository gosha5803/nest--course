import { ApiProperty } from "@nestjs/swagger/dist/decorators"

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    email: string

    @ApiProperty({example: '1234567', description: 'Пароль'})
    password: string
}