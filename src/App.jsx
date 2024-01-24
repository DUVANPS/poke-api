

import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPages from './pages/PokedexIdPages'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {



  return (
    <div>
      <Routes>
        <Route path ='/' element={<HomePage/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path ='/pokedex' element={<PokedexPage/>}/>
          <Route path ='/pokedex/:id' element={<PokedexIdPages/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
