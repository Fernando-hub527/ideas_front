import {
  createBrowserRouter,
} from "react-router";
import routesConfig from "./routesConfig.ts";
import { Root } from "../components/generics/Root.tsx";
import { IdeasFeed } from "../pages/IdeasFeed.tsx";
import { DetailsIdea } from "../pages/DetailsIdea.tsx";
import { Login } from "../pages/Login.tsx";

const routes = createBrowserRouter([
  {path: routesConfig.login, Component: Login},
  {
    path: routesConfig.home, 
    Component: Root,
    children: [
      {index: true, Component: IdeasFeed},
      {path: routesConfig.ideas, Component: DetailsIdea}
    ]
  },

]);

export default routes