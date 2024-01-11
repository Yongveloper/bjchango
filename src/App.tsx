import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Order from 'pages/Order';
import Complete from 'pages/Complete';
import Error from 'pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
