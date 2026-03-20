import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

// layout is the parent
// a component will be render depends on the url path
export default [
  index("routes/home.tsx"),
  layout("./auth/layout.tsx", [
    route("auth/login", "./auth/login.tsx"),
    route("auth/register", "./auth/register.tsx"),
  ]),
] satisfies RouteConfig;
