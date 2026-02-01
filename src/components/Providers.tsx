"use client";

import { QuoteProvider } from "@/context/QuoteContext";
import QuoteModal from "@/components/QuoteModal";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QuoteProvider>
      {children}
      <QuoteModal />
    </QuoteProvider>
  );
}
