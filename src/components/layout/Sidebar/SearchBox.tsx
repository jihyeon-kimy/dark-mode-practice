import { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { SidebarContext } from "../../../store/SidebarProvider";
import color from "../../../styles/color";

const SearchBox = () => {
  const { isOpen, openSidebarHandler } = useContext(SidebarContext);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isOpen) return openSidebarHandler();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("search"));
  };

  return (
    <SearchBoxCotainer onSubmit={submitHandler}>
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
      {isOpen && <Input placeholder="Search..." name="search" />}
    </SearchBoxCotainer>
  );
};

export default SearchBox;

const SearchBoxCotainer = styled.form`
  display: flex;
  align-items: center;
  margin: 0 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.hover};
  transition: background-color 0.3s linear;
`;

const SearchButton = styled.button`
  border-radius: 10px;

  svg {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    padding: 10px;
    fill: ${color.gray};
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  margin: 0 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${color.gray};

  ::placeholder {
    font-size: 18px;
    font-weight: 500;
    color: ${color.gray};
  }
`;
