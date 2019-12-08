import React from "react";
import "./app.css";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Loader from "../loader";
import LoginRoute from "../../routes/login-route";
import ProfileRoute from "../../routes/profile-route";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true
    };
  }


  componentDidMount() {
    this.setState({ loader: false });
  }

  render() {
    return (
      <div className="container">
        {this.state.loader ? (
          <Loader></Loader>
        ) : (
          <div>
            <Router>
            <Header></Header>
            <Switch>
              <Route path="/login" exact component={LoginRoute} />
              <Route path="/profile" component={ProfileRoute} />
              <Redirect exact from="/" to="/login" />
            </Switch>
            <Footer></Footer>
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export { App };
