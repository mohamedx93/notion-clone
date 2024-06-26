"use client";

import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import { useConvexAuth } from "convex/react";

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
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
