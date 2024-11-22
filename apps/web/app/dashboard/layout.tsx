import { ReactNode } from "react";
import DashboardNavbar from "./_components/dashboard-navbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <DashboardNavbar>{children}</DashboardNavbar>;
}
