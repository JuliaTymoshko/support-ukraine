import './styles/index.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Gallery from 'pages/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Here starts changable content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />

      {/* div ends below */}
    </div>
  );
}

export default App;
