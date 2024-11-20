import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreatePlaylistDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  readonly owner: Types.ObjectId;

  @IsOptional()
  @IsArray()
  readonly videos: Types.ObjectId[]; 
}
