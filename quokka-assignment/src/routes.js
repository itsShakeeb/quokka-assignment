import { lazy } from "react";

const Dashboard = lazy(() => import("./views/Dashboard/Dashboard"));

const routes = [
  {
    path: "/protected-dashboard",
    component: Dashboard,
    name: Dashboard,
    exact: true,
  },
];

export default routes;
