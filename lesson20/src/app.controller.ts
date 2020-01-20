import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IParameters } from './interfaces/formula.interface';
import { IApp } from './interfaces/app-controller.interface';

@Controller()
export class AppController implements IApp {
  constructor(private readonly appService: AppService) {}


  @Get('/parameter')
  getHello(@Query() query : {id: number}) : {id: number, data: IParameters} {
    return {
      id: query.id,
      data: this.appService.getHello(),
    };
  }
}
