import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IFormula } from './interfaces/formula.interface';
import { IApp } from './interfaces/app-controller.interface';

@Controller()
export class AppController implements IApp {
    public formula: IFormula;
    constructor(private readonly appService: AppService) {
        // this.parameters = {
        //     id: 710,
        //     validation: {
        //         min: 0,
        //         max: 800,
        //         required: null,
        //         readonly: null,
        //         params: null
        //     },
        //     default: "10",
        //     name: "IT",
        //     label: "Cable/Pipe FILL/occupancy FILL"
        // }
    }

  @Get()
  getHello() : IFormula {
    return this.formula;
  }

  @Get('/api')
  getAll() : string {
    return 'Hi';
  }

//   @Post('/api')
//   getInfo(@Body() body: {parameters: IParameters[]}) : IParameters[] {
//     return body.parameters;
//   }

  // @Delete()
  // removeParam() {
  //   return this.appService.removeParam('name', 702);
  // }
}
