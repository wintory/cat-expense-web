import './App.css'
import AppProvider from './providers/AppProvider'
import MainPage from './pages/Main'

const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  )
}

export default App
