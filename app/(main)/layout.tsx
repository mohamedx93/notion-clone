"use client";

import { Spinner } from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  if (isLoading) {
    <div className="w-full flex items-center justify-center">
      <Spinner size="lg" />
    </div>;
  }
  if (!isAuthenticated) {
    return redirect("/");
  }
  return (
    <div className="flex h-full  dark:bg-neutral-900">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;