import { IFormula } from "./formula.interface";

export interface IApp {
    getHello(): IFormula;
    getAll(): String;
}