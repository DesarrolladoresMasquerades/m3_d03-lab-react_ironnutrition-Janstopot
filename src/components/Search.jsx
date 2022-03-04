// Style Guide:
// In this file you can find a reference example of the structure
// that the component should have.
// Remember to import Ant Design components before using them.
import { Divider, Input } from "antd";
import { useState } from "react";



// Iteration 5
function Search(props) {

  const [search, setSearch] = useState({
    search: ""

})

  function handleSearch(event){
    const inputSearch = event.target.name
    let value = event.target.value
    //setSearch(event.target.name)
    //props.Search(event.target.value)
    
    setSearch(search=> ({...search, [inputSearch]: value}))
    //console.log(search.search)
    console.log(search)
    
}




  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} name="search" type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;