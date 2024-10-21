import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ example: 'email@example.com', description: 'User email' })
    readonly email: string;

    @ApiProperty({ example: 'asdf', description: 'User password' })
    readonly password: string;
}
