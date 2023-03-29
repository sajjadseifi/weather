import React, { FC } from "react";
import qs from 'qs'
import {  useLocation } from "react-router-dom";


type SignleDayType = 'TODAY' | 'TOMORROW'

interface SignleDayProps {
    flag:SignleDayType
}

const SignleDay : FC<SignleDayProps> = (props) =>{

    return (
        <div>{props.flag}</div>
    )
}

export default SignleDay;