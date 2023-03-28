import { WheatherStatus } from "../enum/wheather-status.enum"
import { RainyBadIcon } from "./icons"
import { wheatherIcon } from "./weather-icon"

export interface IChoseWtheather { 
    deg?:number
    isNight?:boolean
}

export const choseWheatherIcon = (status:WheatherStatus,props : IChoseWtheather) => {
    if (props && WheatherStatus.Rainy == status)
    {
        if (props?.deg && props.deg <= 10)
        {
            return RainyBadIcon
        }
    }

    return wheatherIcon[status]
}