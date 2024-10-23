import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty({ example: 'Admin', description: 'Role' })
    readonly value: string;

    @ApiProperty({ example: 'Mega', description: 'All that he want' })
    readonly description: string;
}
