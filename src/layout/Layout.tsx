import React, { FC } from "react";
import Navigation from "./Navigation/Navigation";
import styles from './Layout.module.css'
import Menu from "./Menu/Menu";

interface LayoutProps {
    children?:any
}

const Layout : FC<LayoutProps> = (props) =>{
    return (
        <div className={styles.Layout}>
            <Navigation/>
            <Menu/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout