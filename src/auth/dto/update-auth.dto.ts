import { PartialType } from '@nestjs/mapped-types';
import { AuthDto } from 'src/auth/dto/auth.dto';

export class UpdateAuthDto extends PartialType(AuthDto) {}
