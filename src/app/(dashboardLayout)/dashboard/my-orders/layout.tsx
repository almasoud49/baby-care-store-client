"use client";

import UserDashboardMenu from "@/components/dashboard/UserDashboard/UserDashboardMenu";
import React from "react";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserDashboardMenu>{children}</UserDashboardMenu>;
}