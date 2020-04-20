import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


function App() {
  return (
    <div>
      {/* <HomePage/> */}
      {/* exact -> this path must be exactly / , it's means when we dont have it and we have ex. / and we change to /wtf we have page / and add to page / elements from /wtf*/}
      {/* switcch is special construct to give us control in switching pathes and rendering data */}
      <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route path = "/shop" component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
