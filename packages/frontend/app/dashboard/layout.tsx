import { ArrowRightStartOnRectangleIcon, Cog8ToothIcon } from "@heroicons/react/16/solid";
import { ArrowUpTrayIcon, BoltIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { NavLink, Outlet, redirect } from "react-router";

import { Avatar, AvatarButton } from "@/components/ui/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";
import { Navbar, NavbarDivider, NavbarItem, NavbarLabel, NavbarSection, NavbarSpacer } from "@/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/ui/sidebar";
import { StackedLayout } from "@/components/ui/stacked-layout";
import { auth } from "@/lib/auth";

import type { Route } from "./+types/layout";

export async function clientLoader() {
  const session = await auth.getSession();

  if (!session.data) {
    throw redirect("/sign-in");
  }

  return session.data;
}

const navItems = [
  { label: "Outbox", url: "/outbox", icon: ArrowUpTrayIcon },
  { label: "Pulse", url: "/pulse", icon: BoltIcon },
];

export default function Layout({ loaderData }: Route.ComponentProps) {
  const { user } = loaderData;

  return (
    <StackedLayout
      navbar={
        <Navbar>
          <NavbarLabel className="font-semibold uppercase pr-3 select-none cursor-default">Liaison</NavbarLabel>
          <NavbarDivider className="max-lg:hidden" />
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url, icon: Icon }) => (
              <NavLink key={label} to={url}>
                {({ isActive }) => (
                  <NavbarItem current={isActive}>
                    <Icon />
                    {label}
                  </NavbarItem>
                )}
              </NavLink>
            ))}
          </NavbarSection>
          <NavbarSpacer />
          <NavbarSection>
            <NavbarItem href="/search" aria-label="Search">
              <MagnifyingGlassIcon />
            </NavbarItem>
            <Dropdown>
              <DropdownButton className="size-8 " as={AvatarButton} src={user?.image} aria-label="Account options" />
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Settings</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => auth.signOut()}>
                  <ArrowRightStartOnRectangleIcon />
                  <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarLabel>Navigation</SidebarLabel>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url}>
                  {label}
                </SidebarItem>
              ))}
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      <Outlet />
    </StackedLayout>
  );
}
