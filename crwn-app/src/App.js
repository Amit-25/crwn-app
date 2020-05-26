import React from 'react';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-sign-up.component';
import Header from '../src/component/header/header.component'
import HomePage  from '../src/pages/homPage/homePage.component';
import ShopPage from './pages/shop/shopPage.component';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import {auth, createUserProfileDocument} from '../src/firebase/firebase.utils';
import  {setCurrentUser} from '../src/redux/user-reducer/user.actions';
import { connect } from 'react-redux';

import './App.css';

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
       //this function is for, if u already have user in db otherwise in firebase.util we create the user in createUserProfileDocument
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
       
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signIn' render=
          { () => 
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
          }>
         </Route>
      </Switch>
    </div>
  );
 }
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
});

const mapDispatchToState = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToState)(App);
