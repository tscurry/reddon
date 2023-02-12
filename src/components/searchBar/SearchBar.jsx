import * as React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";

import { searchData } from "../../features/redux/reducers/search";
import searchSlice from "../../features/redux/reducers/search";

import "./searchBar.css";

const SearchBar = () => {
  const [query, setQuery] = React.useState("");
  const dispatch = useDispatch();

  const handleQuery = e => {
    e.preventDefault();
    dispatch(searchSlice.actions.setSearched(true));
    dispatch(searchData(query));
  };

  return (
    <form className="searchbar" onSubmit={handleQuery}>
      <input type="text" placeholder="Search Reddon" value={query} onChange={e => setQuery(e.target.value)} />
      <FiSearch size={27} className="search-icon" onClick={handleQuery} />
    </form>
  );
};

export default SearchBar;
