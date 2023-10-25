"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SnackbarProvider } from "notistack";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <SnackbarProvider>{children}</SnackbarProvider>
    </NextUIProvider>
  );
}
