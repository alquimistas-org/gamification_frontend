import { BrowserRouter, Routes, Route } from 'react-router-dom';

// View components
import { AdminView } from '../componets/views/AdminView';
import { Tournaments } from '../componets/views/Tournaments/Tournaments';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AdminView />} />
        <Route path="admin" element={<AdminView />} />
        <Route path="players" element={<AdminView />} />
        <Route path="tournaments" element={<Tournaments />} />
        <Route path="news" element={<AdminView />} />
        <Route path="more" element={<AdminView />} />
      </Routes>
    </BrowserRouter>
  )
}

export {AppRouter};
