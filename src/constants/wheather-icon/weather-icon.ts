import { WheatherStatus } from "../enum/wheather-status.enum"
import { CloudIcon, NightIcon, RainyIcon, SleetyIcon, StromyIcon, SunnyIcon } from "./icons"

export const wheatherIcon = { 
    [WheatherStatus.Sunny]:SunnyIcon,
    [WheatherStatus.Cloudy]:CloudIcon,
    [WheatherStatus.Windy]:SunnyIcon,
    [WheatherStatus.Rainy]:RainyIcon,
    [WheatherStatus.Stormy]:StromyIcon,
    [WheatherStatus.Snowy]:SunnyIcon,
    [WheatherStatus.Sleety]:SleetyIcon,
    [WheatherStatus.Haily]:SunnyIcon,
    [WheatherStatus.Hot]:SunnyIcon,
    [WheatherStatus.Coldy]:SunnyIcon,
    [WheatherStatus.NightSnowFall]:SunnyIcon,
    [WheatherStatus.LightRainAtNight]:SunnyIcon,
    [WheatherStatus.Night]:NightIcon,
    [WheatherStatus.DownPoury]:SunnyIcon,
}