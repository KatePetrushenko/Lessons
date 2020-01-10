import { Controller, Get, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get')
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  getPostData() {
    return this.appService.getPostData();
  }

  @Delete()
  removeParam() {
    return this.appService.removeParam('name', 702);
  }
}
