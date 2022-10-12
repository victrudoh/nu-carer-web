import React from "react";

// styles
import { Wrapper, Input } from "./SearchWidget.Styles";

const SearchWidget = ({ placeholder }) => {
  return (
    <>
      <Wrapper>
        <i className="bx bx-search-alt"></i>
        <Input type={"search"} placeholder={placeholder} />
      </Wrapper>
    </>
  );
};

export default SearchWidget;
