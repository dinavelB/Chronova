import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

// layout is the parent
// a component will be render depends on the url path
// frontend route
export default [
  index("routes/home.tsx"),
  //nested route
  route("auth", "routes/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("otp", "./auth/otp.tsx"),
    route("register", "./auth/register.tsx"),
  ]),
] satisfies RouteConfig;
