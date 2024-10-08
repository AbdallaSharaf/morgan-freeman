import { createRoot } from 'react-dom/client'
import {HashRouter, Route, Routes} from 'react-router-dom'
import App from './pages/App.jsx'
import Layout from './Layout/Layout.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <>
    <HashRouter>
      <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='portfolio' element={<PortfolioPage />} />
      </Route>
      </Routes>
    </HashRouter>
  </>,
)
