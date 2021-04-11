import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import {Provider} from 'react-redux';
import store from './store.js'
import {BrowserRouter, HashRouter,Route,Switch} from 'react-router-dom'




function App() {

  
  return (
    <Provider store={store}>
    <div className="App">
      {/* <BrowserRouter> */}
      <HashRouter>
      <Navbar/>
      <Switch>
        {/* switch means that only one component gets rendered at a time */}
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      </Switch>
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
    </Provider>
  );
}



export default App;