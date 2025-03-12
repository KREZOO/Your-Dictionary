import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import DictionaryListPage from './pages/DictionaryListPage';
import DictionaryDetailPage from './pages/DictionaryDetailPage';

import './assets/styles/global.scss';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DictionaryListPage />} />
          <Route path='/dictionary/:id' element={<DictionaryDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
