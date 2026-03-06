import { api } from "@/lib/api";

import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Liaison" }, { name: "description", content: "Liaison dashboard" }];
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const res = await api.messages.$get({});
  if (!res.ok) {
    throw new Response("Failed to load messages", { status: 500 });
  }

  return res.json();
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  const messages = loaderData;

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>{message.payload?.headers?.find((h) => h.name === "Subject")?.value ?? "Unknown"}</div>
      ))}
    </div>
  );
}
