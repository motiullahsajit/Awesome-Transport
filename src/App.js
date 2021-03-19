import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import RideType from './components/RideSelection/RideSelection';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className='main'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path='/home'>
              <RideType />
            </Route>
            <PrivateRoute path='/destination/:destination'>
              <Destination />
            </PrivateRoute>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path="/ride/:rideType">
              <Destination />
            </PrivateRoute>
            <Route exact path='/'>
              <RideType />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
