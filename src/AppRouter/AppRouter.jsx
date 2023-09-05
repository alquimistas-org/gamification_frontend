import { BrowserRouter, Routes, Route } from 'react-router-dom';

// View components
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

export {AppRouter};
