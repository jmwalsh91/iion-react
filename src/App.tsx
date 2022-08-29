import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Shell from './components/Navigation/Shell'
import Index from './routes/Index'




export function App() {
  return (
      <BrowserRouter>
 <Shell>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
  <Outlet />
 </Shell>
      </BrowserRouter>

  )
}
