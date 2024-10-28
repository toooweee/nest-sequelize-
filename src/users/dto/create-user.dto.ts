import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'email@example.com', description: 'User email' })
    @IsString({ message: 'Должно быть строкой' })
    @IsEmail({}, { message: 'Не является email' })
    readonly email: string;

    @Length(6, 26, { message: 'Не меньше 6' })
    @ApiProperty({ example: 'asdf', description: 'User password' })
    readonly password: string;
}
