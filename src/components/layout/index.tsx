import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 50px;
`;

const Main = styled.main`
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
`;
