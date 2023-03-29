import React, { FC } from "react";
import styles from './KeyValueIcon.module.css'
import {IconType} from 'react-icons'

interface KeyValueIconProps {
    _key : string
    _value : string | number | any
    icon : IconType

}
const KeyValueIcon : FC<KeyValueIconProps> = (props) => {
    const Icon = props.icon
    return (
        <div className={styles.KeyValueIcon}>
            <div className={styles.IconWrapper}>
                <Icon />
            </div>
            <div className={styles.KeyValueWrapper}>
                <span className={styles.Key}>{props._key}</span>
                <span className={styles.Value}>{props._value}</span>
            </div>
        </div>
    )
}


export default KeyValueIcon