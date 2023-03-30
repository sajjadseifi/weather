import React, { FC, useState } from "react";
import Input from "../../../../components/input/Input";
import ResultBox from "./ResultBox";
import { searchData } from "./search-data";
import styles from './Search.module.css'

interface SearchProps {

}

const Search : FC<SearchProps> = (props) => {
    const [show,setShow] = useState(false)

    return <div className={styles.Search}>
        <Input
            input={{
                placeholder:"Search cities..."
            }}
            icon={'Q'}
            onClick={(text)=>setShow(true)}
        />
        <div className={styles.ResultContainer}>
            {show && <ResultBox 
            setShow={setShow}
            items={searchData} />}
        </div>
    </div>
}

export default Search;