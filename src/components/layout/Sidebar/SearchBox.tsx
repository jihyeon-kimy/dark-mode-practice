import styled from "styled-components";
import color from "../../../styles/color";
import { ReactComponent as SearchIcon } from "../../../assets/search.svg";
import { isOpenProps } from ".";

const SearchBox: React.FC<isOpenProps> = ({ isOpen }) => {
  return (
    <SearchBoxCotainer>
      <SearchIcon />
      {isOpen && <Input placeholder="Search..." id="search" />}
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
