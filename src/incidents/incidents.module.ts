import { Module } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentsEntity } from 'src/database/entities/incident/incidentEntity.entity';
import { ContactsEntity } from 'src/database/entities/contacts/contactsEntity.entity';
import { IncidentEntityService } from 'src/database/entities/incident/incidentEntity.service';
import { ContactEntityService } from 'src/database/entities/contacts/contactsEntity.service';
import { SNSService } from 'src/SNS/SNS.service';

@Module({
  imports: [TypeOrmModule.forFeature([IncidentsEntity]), TypeOrmModule.forFeature([ContactsEntity])],
  controllers: [IncidentsController],
  providers: [IncidentsService, IncidentEntityService, ContactEntityService, SNSService],
})
export class IncidentsModule {}

