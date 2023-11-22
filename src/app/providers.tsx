"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export function Providers(
  {
    children,
  }: {
    children: React.ReactNode;
  },
  session: any
) {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>{children}</SessionProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  );
}
