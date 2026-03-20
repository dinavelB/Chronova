import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | ChronoVA" },
    {
      name: "description",
      content:
        "Sign in to your ChronoVA account to track time and manage tasks.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
