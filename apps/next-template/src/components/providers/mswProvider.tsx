"use client";

import { PropsWithChildren, useEffect, useState } from "react";
const isDev = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";
console.log(process.env.NEXT_PUBLIC_API_MOCKING, isDev);

export default function MswProvider({ children }: PropsWithChildren) {
  const [ready, setReady] = useState(false);

  const init = async () => {
    if (isDev) {
      console.log("Initializing MSW...");
      const initMock = await import("@/mocks/index");
      await initMock.initBrowserMSW();
      setReady(() => true);
      console.log("MSW Initialized");
    }
  };

  useEffect(() => {
    if (ready) return;
    init();
  }, [ready]);

  if (!isDev) return null;

  return <>{children}</>;
}
