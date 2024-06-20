import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/system';
import App from './App';
import { QueryProvider } from './providers/query-providers';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <NextUIProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </NextUIProvider>
  </BrowserRouter>
)
