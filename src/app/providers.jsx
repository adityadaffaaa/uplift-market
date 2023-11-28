"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SnackbarProvider } from "notistack";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <SnackbarProvider>{children}</SnackbarProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
