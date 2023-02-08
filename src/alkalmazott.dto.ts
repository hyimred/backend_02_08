import { IsEmail, Min, IsDateString, IsInt, IsOptional } from "class-validator";

export default class AlkalmazottDto {
    
    @IsOptional()
    @IsDateString()
    kezdoDatum: string | Date;

    @Min(0,{message: 'A havi bérnek nagyobbnak kell lennie nullánál'})
    @IsInt({message: 'A havi bérnek egész számnak kell lennie'})
    haviBer: number;

    @IsEmail()
    hivatalosEmail: string
}