import React from "react";

// styles
import { Wrapper, Input } from "./SearchWidget.Styles";

const SearchWidget = ({ placeholder, onChange, name }) => {
  return (
    <>
      <Wrapper>
        <i className="bx bx-search-alt"></i>
        <Input
          type={"search"}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        />
      </Wrapper>
    </>
  );
};

export default SearchWidget;
