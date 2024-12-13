import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ShortUrl from './ShortUrl'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:short_url' element={<ShortUrl />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
