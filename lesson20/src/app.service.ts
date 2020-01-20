import { Injectable } from '@nestjs/common';
import { IParameters } from './interfaces/formula.interface';

@Injectable()
export class AppService {
  getHello(): IParameters {
    const p = {
      "id": 702,
      "validation": {
          "min": 0,
          "max": 60,
          "required": null,
          "readonly": null,
          "params": null
      },
      "default": "10",
      "name": "FILL",
      "label": "Cable/Pipe FILL/occupancy FILL"
    }
    return p;
  }
}
