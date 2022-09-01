import { ModalsProvider } from '@mantine/modals'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import DetailModal from './components/Modals/DetailModal'
import Shell from './components/Navigation/Shell'
import Index from './routes/Index'

export function App() {
  return (
    <BrowserRouter>
      <ModalsProvider modals={{ boardDetails: DetailModal }}>
        <Shell>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
          <Outlet />
        </Shell>
      </ModalsProvider>
    </BrowserRouter>
  )
}
