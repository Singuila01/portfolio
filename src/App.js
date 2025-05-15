import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Accueil from './pages/Accueil';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;