import type { PropsWithChildren } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type AppProvidersProps = {}

const queryClient = new QueryClient()

export function AppProviders({
  children
}: PropsWithChildren<AppProvidersProps>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
