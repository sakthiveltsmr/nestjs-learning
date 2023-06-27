import { IsNotEmpty, IsNumberString } from 'class-validator';

export class createAddressDto {
  @IsNotEmpty()
  @IsNumberString()
  line1: string;
  @IsNotEmpty()
  city: string;
}
