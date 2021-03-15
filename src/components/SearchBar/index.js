const SearchBar = () => {
    return (
        <>
          <input class="form-control form-control-lg" type="text" placeholder="search" onChange={(e) => this.searchEmployee(e.target.value)}></input> 
        </>
    )
}

export default SearchBar
