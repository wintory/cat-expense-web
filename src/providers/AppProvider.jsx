import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundries from '../components/ErrorBoundaries'
import FullscreenLoader from '../components/FullscreenLoader'
import Navbar from '../components/Navbar'

const AppProvider = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <ErrorBoundary fallback={<ErrorBoundries />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Suspense fallback={<FullscreenLoader />}>
          <div className="bg-image" />
          <Navbar />
          {children}
        </Suspense>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default AppProvider
