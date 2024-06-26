import Navbar from "./_components/navbar";

const MarketingLayout: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="h-full dark:bg-neutral-900">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
};

export default MarketingLayout;
