import { lazy } from 'react'
import './App.css'
import AppProvider from './providers/AppProvider'

const App = () => {
  const MainPage = lazy(() => import('./pages/Main'))

  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  )
}

export default App
