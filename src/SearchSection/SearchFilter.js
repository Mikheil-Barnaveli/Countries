import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function SearchFilter(props) {
  return (
    <section
      style={{
        width: "100%",
        height: "20dvh",
        backgroundColor: props.searchMainColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "2rem",
        gap: "1rem",
      }}
    >
      <Search
        data={props.data}
        searchBGColor={props.searchBGColor}
        searchColor={props.searchColor}
      />
      <Filter
        FilterBGColor={props.FilterBGColor}
        FilterColor={props.FilterColor}
        onOptionChangeHandler={props.onOptionChangeHandler}
      />
    </section>
  );
}

export default SearchFilter;
