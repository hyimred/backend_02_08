import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export default class Alkalmazott {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Exclude()
    @Column()
    password: string;

    @Column( { default: 0 } )
    beosztottakSzama: number;

    @Column()
    kezdoDatum: Date;

    @Exclude()
    @Column( { default: 0 } )
    haviBer: number;

    @Column()
    hivatalosEmail: string;
    
}