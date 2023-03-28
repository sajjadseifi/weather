import { WheatherStatus } from "../../constants/enum/wheather-status.enum";

export const next3DayDummyData = [
    {
        date:new Date(),
        pressure:"1000MB",
        windNe:"5-0 km/h",
        realFeel:10,
        sunRise:new Date(),
        sunSet:new Date(),
        humidity:51,
        day : 'Monday',
        wheatherDegC:32,
        wheatherDegF:20,
        wheatherStatus:WheatherStatus.Sunny
    },
    {
        date:new Date(),
        pressure:"2000MB",
        windNe:"5-0 km/h",
        realFeel:10,
        sunRise:new Date(),
        sunSet:new Date(),
        humidity:40,
        day : 'Tuesday',
        wheatherDegC:24,
        wheatherDegF:10,
        wheatherStatus:WheatherStatus.Cloudy  
    },
    {
        date:new Date(),
        pressure:"3000MB",
        windNe:"5-0 km/h",
        realFeel:10,
        sunRise:new Date(),
        sunSet:new Date(),
        humidity:75,
        day : 'WednesDay',
        wheatherDegC:10,
        wheatherDegF:2,
        wheatherStatus:WheatherStatus.Rainy  
    },
    {
        date:new Date(),
        pressure:"2500MB",
        windNe:"5-0 km/h",
        realFeel:7,
        sunRise:new Date(),
        sunSet:new Date(),
        humidity:60,
        day : 'Thursday',
        wheatherDegC:15,
        wheatherDegF:6,
        wheatherStatus:WheatherStatus.Rainy  
    },
]