import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Search from './pages/Search'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

function AuthProvider ({children}) {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default App
