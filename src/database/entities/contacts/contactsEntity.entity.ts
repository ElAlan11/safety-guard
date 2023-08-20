import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contacts')
export class ContactsEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    name: string

    @Column()
    phone: string

    @Column()
    external_id: string

    @Column()
    sms_topic: string
}
