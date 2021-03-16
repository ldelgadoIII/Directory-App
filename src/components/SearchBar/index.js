import "./style.css"

const SearchBar = ({ search }) => {
    return (
        <>
          <input class="form-control form-control-lg" type="text" placeholder="search" onChange={(e) => search(e.target.value.toLocaleLowerCase().trim())}></input> 
        </>
    )
}

export default SearchBar
