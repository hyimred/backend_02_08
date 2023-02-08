import { IsEmail, Min, IsDateString, IsInt, IsOptional, Contains, Matches } from "class-validator";

export default class AlkalmazottDto {
    
    @IsOptional()
    @IsDateString()
    kezdoDatum: string | Date;

    @IsOptional()
    @Min(0,{message: 'A havi bérnek nagyobbnak kell lennie nullánál'})
    @IsInt({message: 'A havi bérnek egész számnak kell lennie'})
    haviBer: number;

    @IsEmail()
    hivatalosEmail: string

    @Contains(' ')
    @Matches(/[a-zA-Z ]/)
    fullName: string;

    @IsOptional()
    @Min(0,{message: 'A beosztottak számának nagyobbnak kell lennie nullánál'})
    @IsInt({message: 'A beosztottak számának egész számnak kell lennie'})
    beosztottakSzama: number;
    
}