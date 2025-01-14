import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.scss'
import { ReleaseNotes } from './layout/releasenotes/Releasenotes'
import { Header } from './layout/header/Header'
import { Footer } from './layout/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <main className="app-wrap" id="main">
            <Routes>
              <Route path='/' element={
                <div className='app-grid'>
                  <p>Filler</p>
                </div>
              }></Route>
              <Route path='/releasenotes' element={<ReleaseNotes/>}></Route>
            </Routes>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
