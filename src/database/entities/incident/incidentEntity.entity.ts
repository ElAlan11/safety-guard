import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('incidents')
export class IncidentsEntity {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    user_id: number

    @Column()
    latitude: string

    @Column()
    longitude: string

    @Column()
    initial_latitude: number

    @Column()
    initial_longitude: number

    @Column()
    audio_file: string

    @Column()
    photos_folder: string

    @Column()
    description: string

    @Column()
    category: number
}
