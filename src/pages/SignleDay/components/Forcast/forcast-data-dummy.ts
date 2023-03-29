import { WheatherStatus } from "../../../../constants/enum/wheather-status.enum";
import { IForcast } from "./forcast.interface";

export const forcastData : IForcast[] = [
    {
        time:new Date(),
        wheatherDegC:25,
        wheatherStatus:WheatherStatus.Cloudy,
        wheatherDegF:25
    },
    {
        time:new Date(),
        wheatherDegC:2,
        wheatherStatus:WheatherStatus.Coldy,
        wheatherDegF:25
    },
    {
        time:new Date(),
        wheatherDegC:34,
        wheatherStatus:WheatherStatus.Sunny,
        wheatherDegF:25
    },
    {
        time:new Date(),
        wheatherDegC:32,
        wheatherStatus:WheatherStatus.Cloudy,
        wheatherDegF:25
    },
    {
        time:new Date(),
        wheatherDegC:30,
        wheatherStatus:WheatherStatus.Cloudy,
        wheatherDegF:25
    },
    {
        time:new Date(),
        wheatherDegC:10,
        wheatherStatus:WheatherStatus.Rainy,
        wheatherDegF:25
    },
    {
        time:new Date(),
        wheatherDegC:5,
        wheatherStatus:WheatherStatus.Stormy,
        wheatherDegF:25
    },
]