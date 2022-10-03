import { Provider } from '@f8n/foundationkit-hooks'
import { ModalsProvider } from '@mantine/modals'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { WagmiConfig } from 'wagmi'

import DetailModal from './components/Modals/DetailModal'
import Shell from './components/Navigation/Shell'
import Collection from './routes/Collection'
import Index from './routes/Index'
import { wagmiClient } from './utils/services/WagmiClient'

export function App() {
  return (
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <Provider>
          <ModalsProvider modals={{ boardDetails: DetailModal }}>
            <Shell>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/collections" element={<Collection />} />
              </Routes>
              <Outlet />
            </Shell>
          </ModalsProvider>
        </Provider>
      </WagmiConfig>
    </BrowserRouter>
  )
}
