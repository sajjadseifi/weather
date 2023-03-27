import React from "react";
import Input from "../../../../components/input/Input";


const Search = () => {
    return <Input
        input={{
            placeholder:"Search cities..."
        }}
        icon={'Q'}
    />
}

export default Search;