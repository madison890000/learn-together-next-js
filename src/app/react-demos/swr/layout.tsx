'use client';
import React from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

export default function SwrLayout({
                                    children, // will be a page or nested layout
                                  }: {
  children: React.ReactNode
}) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  )
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </section>
  )
}