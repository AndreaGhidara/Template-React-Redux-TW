import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '@/state/store';

import App from '@/App.tsx'
import NotFoundPage from '@/pages/NotFoundPage.tsx'
import Aboutpage from '@/pages/Client/Aboutpage/Aboutpage.tsx'

import '@/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/about',
    element: <Aboutpage />
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
