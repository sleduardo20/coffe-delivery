import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/Default';
import { ConfirmedOrder } from '../pages/ConfirmedOrder';
import { ConfirmOrder } from '../pages/ConfirmOrder';
import { Home } from '../pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
        <Route path="/confirmedOrder" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
}
