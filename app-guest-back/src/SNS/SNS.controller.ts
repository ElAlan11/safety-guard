import {
  Controller,
  Get,
  NotFoundException,
  UseGuards,
  Param,
  Res,
  Body,
  Post,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { query, Response } from 'express';
import { SNSService } from './SNS.service';

@Controller('sns')
export class SNSController {
  constructor(private readonly SNSService: SNSService) {}

  /*@Post('/notificate/contacts')
  async sendAlertContacts(
    @Body('id') id: string,
  ){

    console.log({id});
    try {
      return await this.SNSService.sendAlertContacts(id);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get('/:incident_id/:contact_id')
  async getIncident(
    @Param('incident_id') incident_id: string,
    @Param('contact_id') contact_id: number,
  ){
    return await this.SNSService.getIncident(incident_id, contact_id);
  }*/
  
  @Get('/listTopics')
  async listTopics(){
    return await this.SNSService.listTopics();
  }

  @Post('/create')
  async createTopic_SNS(
    @Body('contact') contact: string
  ){
    return await this.SNSService.generateTopic(contact);
  }

}
