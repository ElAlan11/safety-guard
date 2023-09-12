import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ContactsEntity } from "./contactsEntity.entity";

@Injectable()
export class ContactEntityService {
    constructor(
        @InjectRepository(ContactsEntity)
        private readonly contactEntityRepository: Repository<ContactsEntity>,
    ){}

    async Findcontact(id: number) {
        return await this.contactEntityRepository.findOne({ where: { id } });
    }

    async FindcontactByExternalId(external_id: string) {
        return await this.contactEntityRepository.findOne({ where: { external_id } });
    }

    async Addcontact(contact: ContactsEntity) {
        return await this.contactEntityRepository.insert(contact);
    }

    async FindcontactsByUser(user_id: number) {
        return await this.contactEntityRepository.find({ where: { user_id } });
    }

    async updateContact(id: number, contact: ContactsEntity) {
        return await this.contactEntityRepository.update(id, contact);
    }
}