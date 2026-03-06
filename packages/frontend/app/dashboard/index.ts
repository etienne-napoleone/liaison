import { api } from "@/lib/api";

import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Liaison" }, { name: "description", content: "Liaison dashboard" }];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await api.messages.$get({});
  if (!res.ok) {
    return { token: null };
  }

  return res.json();
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const { token } = loaderData;
  return token;
}
