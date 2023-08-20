import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncidentsModule } from './incidents/incidents.module';
import { SNSModule } from './SNS/SNS.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidentsEntity } from './database/entities/incident/incidentEntity.entity';
import { ContactsEntity } from './database/entities/contacts/contactsEntity.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'panicappdb.cj61bz6fyzst.us-east-2.rds.amazonaws.com',
      port: 3306,
      username: 'admin',
      password: 'p4nic4pp#',
      database: 'panicappbd',
      entities: [IncidentsEntity, ContactsEntity],
      synchronize: false,
      dropSchema: false
  }),
  IncidentsModule,
  SNSModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}