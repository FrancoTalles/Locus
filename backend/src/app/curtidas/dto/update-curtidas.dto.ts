import { PartialType } from '@nestjs/mapped-types';
import { CreateCurtidasDto } from './create-curtidas.dto';

export class UpdateCurtidasDto extends PartialType(CreateCurtidasDto) {}
