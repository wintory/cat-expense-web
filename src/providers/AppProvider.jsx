import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Suspense } from 'react'
import FullscreenLoader from '../components/FullscreenLoader'
import Navbar from '../components/Navbar'

const AppProvider = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Suspense fallback={<FullscreenLoader />}>
        <div className="bg-image" />
        <Navbar />
        {children}
      </Suspense>
    </QueryClientProvider>
  )
}

export default AppProvider
