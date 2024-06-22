import { FC } from 'react'
import AppRoutes from './routes'
import { Toaster } from 'react-hot-toast'

const App: FC = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <AppRoutes />
    </>
  )
}

export default App
