import React, {Component} from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = () => null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({currentUser: user});
      if(user){
        const userRef = createUserProfileDocument(user);
        (await userRef).onSnapshot(snap => {
          this.setState({currentUser: {
            id: snap.id,
            ...snap.data()
          }});
          console.log(this.state);
        });
      } else{
        this.setState({currentUser: user}); //set to null, without it we can't sing out
      }
    });
  }

  componentWillMount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        {/* <HomePage/> */}
        {/* exact -> this path must be exactly / , it's means when we dont have it and we have ex. / and we change to /wtf we have page / and add to page / elements from /wtf*/}
        {/* switcch is special construct to give us control in switching pathes and rendering data */}
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route path = "/shop" component = {ShopPage}/>
          <Route path = "/signin" component = {SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;