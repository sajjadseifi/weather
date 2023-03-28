import { WheatherStatus } from "../enum/wheather-status.enum";

export interface WheatherBase { 
    day:string;
    wheatherStatus:WheatherStatus;
    wheatherDegC:number
    wheatherDegF:number
}