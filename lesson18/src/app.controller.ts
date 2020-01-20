import { Controller, Get, Post, Delete, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IFormula, IParameters } from './interfaces/formula.interface';
import { IApp } from './interfaces/app-controller.interface';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Controller()
export class AppController implements IApp {
    num: IParameters;
    newformula: IFormula;
    constructor(public readonly appService: AppService) {}

  @Get()
  getHello() : IFormula {
    return this.appService.getHello();
  }
  
  // Отправляю через Postman Post запрос на http://localhost:3000/parameters
  // {
  //   "parameters" : [
  //     {
  //         "id": 710,
  //         "validation": {
  //             "min": 0,
  //             "max": 800,
  //             "required": true,
  //             "readonly": true,
  //             "params": "null"
  //         },
  //         "default": "10",
  //         "name": "IT",
  //         "label": "Cable/Pipe FILL/occupancy FILL"
  //       }
  //     ]
  // }
  @Post('/parameters')
  getAll(@Body() body: {parameters: IParameters[] } ) : IParameters[] {
    return body.parameters;
  }
  
  @Delete(':id')
  remove(@Param('id') id: number ) {
    let arr = this.appService.getHello();

    let newArr = arr.parameters.filter(elem =>elem.id != id );
    return newArr;
  }
}

