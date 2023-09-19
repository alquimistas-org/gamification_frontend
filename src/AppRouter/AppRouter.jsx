// Componente en desuso, verificar que pueda borrarse.

import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

// View components
import { Root } from '../Root/Root';
import { ErrorPage } from '../componets/views/ErrorPage/ErrorPage';
import { AdminView } from '../componets/views/AdminView';
import { Tournaments } from '../componets/views/Tournaments/Tournaments'
import { News } from '../componets/views/News/News';
import { Players } from '../componets/views/Players/Players';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AdminView />} />
        <Route path="main" element={<AdminView />} />
        <Route path="players" element={<Players />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="news" element={<News />} />
        <Route path="more" element={<AdminView />} />
      </Routes>
    </BrowserRouter>
  )
}

// const AppRouter = createBrowserRouter ([
//   {
//     path: "/",
//     element: <div>Login placehoder</div>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/login",
//     element: <div>Login placehoder</div>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/signup",
//     element: <div>Signup placeholder</div>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/app/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     // loader: rootLoader,
//     // action: rootAction,
//     children: [
//       {
//         index: true, element: <div>Index placeholder</div>,
//       },
//       {
//         path: "main/",
//         element: <AdminView/>,
//         // loader: contactLoader,
//       }, 
//       {
//         path: "players/",
//         element: <Players/>,
//         // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
//         // action: editAction,
//       },
//       {
//         path: "tournaments/",
//         element: <Tournaments/>,
//         // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
//         // action: editAction,
//       },
//       {
//         path: "news/",
//         element: <News/>,
//         // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
//         // action: editAction,
//       },
//       {
//         path: "more/",
//         element: <AdminView/>,
//         // loader: contactLoader, // Should create its own function, although it works as contactLoader in this case.
//         // action: editAction,
//       },
//     ],
//   },
// ])

export {AppRouter};
