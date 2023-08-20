import { Module } from '@nestjs/common';
import { SNSService } from './SNS.service';
import { SNSController } from './SNS.controller';
// import { IncidentEntityService } from 'src/database/entities/incident/incidentEntity.service';
// import { ContactEntityService } from 'src/database/entities/contacts/contactsEntity.service';

@Module({
  imports: [],
  controllers: [SNSController],
  providers: [SNSService],
})
export class SNSModule {}

