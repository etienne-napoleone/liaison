import { AuthLayout } from "components/ui/auth-layout";
import { Outlet, redirect } from "react-router";

import { auth } from "@/lib/auth";

export default function Layout() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
