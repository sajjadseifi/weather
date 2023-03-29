import React, { FC } from "react";
import styles from './Menu.module.css'

import { NavLink } from "react-router-dom";


interface MenuLinkProps { 
    to:string
    text:string
}
const MenuLink : FC<MenuLinkProps> = (props) => <NavLink
  {...props}
  className={({ isActive, isPending }) =>
    isPending ? styles.Pending : isActive ? styles.Active : styles.Free
  }
>
{props.text}
</NavLink>

const Menu = () => {
    return (
        <div className={styles.Menu}>
            <ul>
                <li><MenuLink to="/day/today" text="ToDay"/></li>
                <li><MenuLink to="/day/tomorrow" text="Tomorrow"/></li>
                <li><MenuLink to="/next3days" text="Next 3 Days"/></li>
            </ul>
        </div>
    )
}

export default Menu