import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import RouterInfo, { onNavRouterElement } from "./RouterInfo";

const routerContents = RouterInfo.map((router) => ({
  path: router.path,
  element: router.element,
}));

export const routers = createBrowserRouter([
  {
    element: <Layout />,
    children: routerContents,
  },
]);

interface NavElement {
  id: number;
  label: string;
  path: string;
  icon: React.SVGProps<SVGSVGElement>;
}

export const navContents: NavElement[] = RouterInfo.reduce((prev, router) => {
  if (!("label" in router)) return prev;

  return [
    ...prev,
    {
      id: router.id,
      label: (router as onNavRouterElement).label,
      path: router.path,
      icon: (router as onNavRouterElement).icon,
    },
  ];
}, [] as NavElement[]);
