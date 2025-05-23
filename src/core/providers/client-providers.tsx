"use client";

import { useState, useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { NavProvider } from "@/data/contexts/nav-context";
import { SmoothScrollProvider } from "@/core/providers/smooth-scroll-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/core/libs/react-query";
import { Navbar } from "@/core/components/navbar/navbar";
// import { Footer } from "@/core/components/footer";

export function ClientProviders({ children , lng }: { children: React.ReactNode, lng: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider>
        <NavProvider>
          <div className="flex-col flex justify-between">
            <p>dddd</p>
            <Navbar lng={lng}/>
            <div className={isMounted ? "pt-[70px]" : ""}>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </div>
            {/* <Footer lng={lng} /> */}
          </div>
        </NavProvider>
      </ParallaxProvider>
    </QueryClientProvider>
  );
}
