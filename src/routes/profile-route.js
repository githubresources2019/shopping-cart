import React from 'react' ;
import MenuList from '../components/menu-list';
import ProductContainer from '../components/product-container';
import Checkout from '../components/checkout';
import { Switch, Route, Redirect } from 'react-router-dom';

const ProfileRoute = (props) =>{
  return(
    <div className="row content-view">
    <div className="col-md">
      <MenuList></MenuList>
    </div>
    <div className="col-md-9">
      <Switch>
        <Route exact path="/profile/groceries" component={ProductContainer}></Route>
        <Route exact path="/profile/fruits" component={ProductContainer}></Route>
        <Route exact path="/profile/vegetables" component={ProductContainer}></Route>
        <Route exact path="/profile/dairy" component={ProductContainer}></Route>
        <Route exact path="/profile/flowers" component={ProductContainer}></Route>
        <Route exact path="/profile/cosmetics" component={ProductContainer}></Route>
        <Route exact path="/profile/apparels" component={ProductContainer}></Route>
        <Route exact path="/profile/checkout" component={Checkout}></Route>
        <Redirect exact from="/profile" to="/profile/groceries" />
      </Switch>
    </div>
    </div>
  )
}

export default ProfileRoute;