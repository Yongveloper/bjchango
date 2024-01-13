import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Order from 'pages/Order';
import Complete from 'pages/Complete/Complete';
import Error from 'pages/Error';
import Layout from 'components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
