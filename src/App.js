import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import RideType from './components/RideType/RideType';
import Login from './components/Login/Login';
import ConfirmRide from './components/ConfirmRide/ConfirmRide';
import { createContext, useState } from 'react';
import NotFound from './components/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className='main'>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header />
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path="/ride/:rideType">
              <ConfirmRide />
            </Route>
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
