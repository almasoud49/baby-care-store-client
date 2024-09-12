"use client";

import DashboardMenu from "@/components/dashboard/DashboardMenu";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardMenu>{children}</DashboardMenu>;
}