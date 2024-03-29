import './App.css'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div className="App">
      <Navigation />

      <AppRoutes />

      <Footer />
    </div>
  )
}

export default App
