import styled from "styled-components";
import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";
import Nav from "./Nav";
import Bottom from "./Bottom";

const Sidebar = () => {
  return (
    <SidebarConatiner>
      <UserInfo />
      <SearchBox />
      <Nav />
      <Bottom />
    </SidebarConatiner>
  );
};

export default Sidebar;

const SidebarConatiner = styled.aside`
  display: flex;
  flex-direction: column;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: ${({ theme }) => theme.background};
`;
