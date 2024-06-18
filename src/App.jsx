// React
import { Route, Routes } from 'react-router-dom'

// Stlyes
import './App.css'

// Components
import Navbar from './components/Navbar/Navbar'
import HomePage from './routes/HomePage'
import WritePage from './routes/WritePage'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path ='/' element={ <HomePage /> } />
          <Route path ='/write' element={ <WritePage /> } />
          <Route path='/write/:event' element={ <WritePage />} />
        </Routes>
      </main>
    </>  
    )
}

export default App
