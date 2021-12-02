import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LongAlert from './components/LongAlert'
import ShortAlert from './components/ShortAlert'

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='nav'>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Long Alert</Link>
            </li>
            <li>
              <Link to='/shortalert'>Short Alert</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='section'>
        <Routes>
          <Route path='/' element={<LongAlert />} />
          <Route path='shortalert' element={<ShortAlert />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
