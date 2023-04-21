import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <aside>side Navbar 레이아웃</aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
