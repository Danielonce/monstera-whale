import React, {Fragment} from 'react';
import './style.css'
import Header from './components/Header';
import ShowCards from './components/ShowCards';
import Whales from './components/Whales';
import Buttons from './components/Buttons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      
      <Header />

      <Router>
        <Buttons></Buttons>  
        <Switch>
          <Route exact path="/" component={ShowCards} />
          <Route exact path="/whales" component={Whales} />
        </Switch>
      </Router> 
      
    </Fragment>
  );
}

export default App;
