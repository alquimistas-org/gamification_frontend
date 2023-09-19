import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

// View components
import { Root } from './Root/Root';
import { ErrorPage } from './componets/views/ErrorPage/ErrorPage';
import { AdminView } from './componets/views/AdminView';
import { Tournaments } from './componets/views/Tournaments/Tournaments'
import { News } from './componets/views/News/News';
import { Players } from './componets/views/Players/Players';

const router = createBrowserRouter ([
  {
    path: "/login",
    element: <div>Login placehoder</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <div>Signup placeholder</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div>Index placeholder</div>,
        errorElement: <ErrorPage />,
      },
      {
        path: "main/",
        element: <AdminView/>,
        errorElement: <ErrorPage />,

      }, 
      {
        path: "players/",
        element: <Players/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "tournaments/",
        element: <Tournaments/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "news/",
        element: <News/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "more/",
        element: <AdminView/>,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

export { router };
