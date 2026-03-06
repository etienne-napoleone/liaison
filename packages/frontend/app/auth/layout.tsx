import { AuthLayout } from "components/ui/auth-layout";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}
