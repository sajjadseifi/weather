import { WheatherBase } from "../../../../constants/interfaces/wheather-base.interface";

export interface IForcast extends Omit<WheatherBase,'day'> {
    time:Date
}
