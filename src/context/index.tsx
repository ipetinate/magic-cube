import type {PropsWithChildren} from 'react'

import {QueryClient} from '@tanstack/react-query'
import {QueryClientProvider} from '@tanstack/react-query/build/lib/QueryClientProvider'

type AppProvidersProps = {}

const queryClient = new QueryClient()

export function AppProviders({children}: PropsWithChildren<AppProvidersProps>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
