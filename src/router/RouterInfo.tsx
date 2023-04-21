import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as EventIcon } from "../assets/event.svg";
import { ReactComponent as AnalyticsIcon } from "../assets/analytics.svg";
import { ReactComponent as FavoriteIcon } from "../assets/favorite.svg";
import { ReactComponent as FaceIcon } from "../assets/face.svg";
import Dashboard from "../pages/Dashboard";
import Schedule from "../pages/Schedule";
import Analytics from "../pages/Analytics";
import Likes from "../pages/Likes";
import User from "../pages/User";
import Main from "../pages/Main";

interface RouterBase {
  id: number;
  path: string;
  element: React.ReactNode;
}

export interface onNavRouterElement extends RouterBase {
  label: string;
  icon: React.ReactNode;
}

type RouterElement = RouterBase | onNavRouterElement;

const RouterInfo: RouterElement[] = [
  {
    id: 0,
    path: "/",
    element: <Main />,
  },
  {
    id: 1,
    path: "/dashboard",
    element: <Dashboard />,
    label: "Dashboard",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    path: "/schedule",
    element: <Schedule />,
    label: "Schedule",
    icon: <EventIcon />,
  },
  {
    id: 3,
    path: "/analytics",
    element: <Analytics />,
    label: "Analytics",
    icon: <AnalyticsIcon />,
  },
  {
    id: 4,
    path: "/likes",
    element: <Likes />,
    label: "Likes",
    icon: <FavoriteIcon />,
  },
  {
    id: 5,
    path: "/user",
    element: <User />,
    label: "User",
    icon: <FaceIcon />,
  },
];

export default RouterInfo;
