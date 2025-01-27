import { IPropertyBase } from "./IPropertyBase";

export interface IProperty extends IPropertyBase{
    description:string;
    totalFloor:number;
    availableFrom:string;
    age:number;
}