import './../../assets/styles/main.scss';
import './../../assets/bootstrap/css/bootstrap.min.css';
import './../../assets/fontawesome/css/all.css';
import { BrowserRouter, Route } from "react-router-dom";

import MainRoute from './MainRoute';
import { RoomProvider } from '../context/actions/RoomContext';

function App() {
  return (
    <BrowserRouter>
      <Route component={ScrollToTop} />
      <RoomProvider>
        <MainRoute />
      </RoomProvider>
    </BrowserRouter>
  );
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
