import { ModalsProvider } from '@mantine/modals'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { WagmiConfig } from 'wagmi'

import DetailModal from './components/Modals/DetailModal'
import Shell from './components/Navigation/Shell'
import Index from './routes/Index'
import { wagmiClient } from './utils/services/WagmiClient'

export function App() {
  return (
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <ModalsProvider modals={{ boardDetails: DetailModal }}>
          <Shell>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
            <Outlet />
          </Shell>
        </ModalsProvider>
      </WagmiConfig>
    </BrowserRouter>
  )
}
