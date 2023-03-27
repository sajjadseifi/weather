import React, { FC } from "react";
import Navigation from "./Navigation/Navigation";
import styles from './Layout.module.css'

interface LayoutProps {
    children?:any
}

const Layout : FC<LayoutProps> = (props) =>{
    return (
        <div className={styles.Layout}>
            <Navigation/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout