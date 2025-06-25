import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;