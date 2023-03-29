import React, { FC } from "react";
import styles from './Title.module.css'

interface TitleProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

const Title : FC<TitleProps> = (props) => {
    const title = props.children?.toString().toUpperCase()

    return <h4 {...props} className={[styles.Title,props.className].join(' ')}>
        {title}
    </h4>
}

export default Title;