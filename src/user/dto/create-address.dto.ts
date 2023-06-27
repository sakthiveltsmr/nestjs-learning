import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  @IsNumberString()
  line1: string;
  @IsNotEmpty()
  city: string;
}
