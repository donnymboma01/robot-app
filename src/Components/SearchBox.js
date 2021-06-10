import React from "react";

const SearchBox = ({ searchChange })=>{
    return(
        <div>
            <input
                className='pa3 b--green bg-lightest-blue'
                type="text"
                placeholder="Search robots..."
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;
