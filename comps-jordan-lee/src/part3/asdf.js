import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Link, withRouter } from "react-router-dom";
// Arbitrary components
const Home = () => <div>Home</div>;
const C1 = () => <div>1st</div>;
const C2 = () => <div>2nd</div>;
const C3 = () => <div>3rd</div>;

//Static routing array
const routes = [
  { path: "/", component: Home },
  { path: "/1", component: C1 },
  { path: "/2", component: C2 },
  { path: "/3", component: C3 }
];

class Header extends Component {
  // Lifecycle to generate state from props. Use this to return the
  // prevRoute and nextRoute
  static getDerivedStateFromProps(props, state) {
    // Find index of route that matches current path
    const index = routes.findIndex(
      route => route.path === props.location.pathname
    );
    const noOfRoutes = routes.length;
    const prevRoute = routes[(index - 1 + noOfRoutes) % noOfRoutes].path;
    const nextRoute = routes[(index + 1 + noOfRoutes) % noOfRoutes].path;
    // Put prevRoute and nextRoute in state
    return { prevRoute, nextRoute };
  }
  render() {
    // Extract prevRoute and nextRoute from this.tate
    const { prevRoute, nextRoute } = this.state;
    // Extract push() from this.props.history,
    // which is injected by withRouter(Header)
    const {
      history: { push }
    } = this.props;
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/1">1st</Link>
            </li>
            <li>
              <Link to="/2">2nd</Link>
            </li>
            <li>
              <Link to="/3">3rd</Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => push(nextRoute)}>Prev Route</button>
        <button onClick={() => push(prevRoute)}>Next Route</button>
      </header>
    );
  }
}

const HeaderWithRouter = withRouter(Header);

ReactDOM.render(
  <HashRouter>
    <>
      <HeaderWithRouter />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact {...route} />
        ))}
      </Switch>
    </>
  </HashRouter>,
  document.getElementById("root")
);
