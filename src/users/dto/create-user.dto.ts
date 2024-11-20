import { IsString, IsEmail, IsOptional, IsArray, IsNotEmpty } from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {

    
  @IsString()
  @IsNotEmpty()  
  readonly username: string;

  @IsEmail()
  @IsNotEmpty()  
  readonly email: string;

  @IsString()
  readonly password: string;



  
}
