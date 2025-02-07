
import { createRoot } from 'react-dom/client'
import{HashRouter} from 'react-router' 
import './index.css'
import App from './App.jsx'
import AppRouter from './routes/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  
    <HashRouter>
      <AppRouter/>
    </HashRouter>,
)
