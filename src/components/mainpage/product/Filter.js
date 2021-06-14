import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import './filter.css';

function Filter() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesApi.category;
  const [sort, setSort] = state.ProductApi.sort;
  const [search, setSearch] = state.ProductApi.search;
  const [category, setCategory] = state.ProductApi.category;

  const handleFilter = (e) => {
    e.preventDefault();
    setCategory(e.target.value);
  };
  return (
    <div className="filter_menu">
      <div className="row">
        <span>Filters: </span>
        <select name="category" id="category" onChange={handleFilter}>
          <option value="">All product</option>
          {categories.map((category) => (
            <option value={'category=' + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="Enter your search!"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <div className="row sort">
        <span>Sort By: </span>
        <select name="sort"  onChange={(e) => setSort(e.target.value)}>
          <option value="">Newest</option>
          <option value="sort=oldest">Oldest</option>
          <option value="sort=-sold">Best sales</option>
          <option value="sort=-price">Price: High-Low</option>
          <option value="sort=price">Price: low-High</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
