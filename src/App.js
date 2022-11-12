import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login'
import ContactList from './pages/ContactList'

import Protected from './components/Protected'
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Login />} />

          <Route path="/" element={<Protected />} >
            <Route path="/home" element={<ContactList />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
