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
import { IncidentsService } from './incidents.service';

@Controller('incidents')
export class IncidentsController {
  constructor(private readonly incidentsService: IncidentsService) {}

  /*@Get(':id')
  async getEmployee(@Param('id') id: string): Promise<any> {
    try {
      const employee = await this.employeesService.fetchEmployee(id);
      return employee;
    } catch (error) {
      throw new NotFoundException(error, 'No se encontró el catálogo');
    }
  }

  @Get('tarjeta/:id')
  async getIdEmployee(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const bufferFile = await this.employeesService.generateDocEmployee(id);
      console.log();
      res.type('application/pdf');
      res.header('Content-Disposition', `attachment; filename="test.pdf"`);
      res.send(Buffer.from(bufferFile, 'base64'));
      return bufferFile;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Post('/page/:page')
  @UseGuards(AuthGuard('jwt'))
  async getPaginatedEmployee(
    @AuthUser() userT: any,
    @Param('page') pageNumber: number,
    @Body('query') queryString: FilterQuery<Employees>,
  ) {
    const user = await this.employeesService.getEmployeePaginated(pageNumber, queryString);
    return user;
  }*/

  @Post('/notificate/contacts')
  async sendAlertContacts(
    @Body('incidentId') incidentId: string,
    @Body('userId') userId: number,
    @Body('userName') userName: string,
    @Body('contacts') contacts: Array<any>,
  ){

    console.log({incidentId, userId, userName, contacts});
    try {
      return await this.incidentsService.sendAlertContacts(incidentId, userId, userName, contacts);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  @Get('/:incident_id/:contact_id')
  async getIncident(
    @Param('incident_id') incident_id: string,
    @Param('contact_id') contact_id: string,
  ){
    return await this.incidentsService.getIncident(incident_id, contact_id);
  }
}
