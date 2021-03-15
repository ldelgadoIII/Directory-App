import { setState } from "react";

const SearchBar = () => {
    return (
        <>
          <input class="form-control form-control-lg" type="text" placeholder="search" onChange={(e) => setState(e.target.value)}></input>  
        </>
    )
}

export default SearchBar
