import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IncidentsEntity } from "./incidentEntity.entity";

@Injectable()
export class IncidentEntityService {
    constructor(
        @InjectRepository(IncidentsEntity)
        private readonly incidentEntityRepository: Repository<IncidentsEntity>,
    ){}

    async findincident(id: string) {
        console.log(id);
        return await this.incidentEntityRepository.findOne({ where: { id } });
    }

    async Addincident(incident: IncidentsEntity) {
        return await this.incidentEntityRepository.insert(incident);
    }

    async FindincidentsByUser(user_id: number) {
        return await this.incidentEntityRepository.find({ where: { user_id } });
    }
}