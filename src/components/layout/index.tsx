import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 50px;
`;
