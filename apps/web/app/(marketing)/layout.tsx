import { ReactNode } from "react";
import MarketingHeader from "./_components/marketing-header";
import MarketingFooter from "./_components/marketing-footer";

interface MarketingLayoutProps {
  children: ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col w-screen max-w-full overflow-x-hidden">
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </div>
  );
}
