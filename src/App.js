import { Routes, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Map from './pages/Map';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='page2' element={<Page2 />}/>
        <Route path='page3' element={<Page3 />}/>
        <Route path='map' element={<Map />}/>
      </Route>
    </Routes>
  );
}

export default App;
