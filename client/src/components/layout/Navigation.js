/* eslint-disable import/no-named-as-default */
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Home from '../pages/Home';
import Books from '../pages/Books';
import Economics from '../pages/Economics';
import Productivity from '../pages/Productivity';
import Contact from '../pages/Contact';
import Search from '../pages/Search';
import ArticleDetail from '../article/ArticleDetail';
import logo from '../../images/logo.png';

function Navigation() {
  return (
    <Router>
      <Navbar className="nav" expand="xl">
        <NavLink to="/" exact>
          <Navbar.Brand>
            <img
              src={logo}
              className="d-inline-block align-top nav__brand"
              alt="WittigNotes logo"
            />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav__item">
            <NavLink to="/books" className="nav__link">
              Books
            </NavLink>
            <NavLink to="/economics" className="nav__link">
              Economics
            </NavLink>
            <NavLink to="/productivity" className="nav__link">
              Productivy
            </NavLink>
            <NavLink to="/contact" className="nav__link">
              Contact
            </NavLink>
            <NavLink to="/search" className="nav__link">
              Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path={['/', '/home']} exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/economics" component={Economics} />
        <Route path="/productivity" component={Productivity} />
        <Route path="/contact" component={Contact} />
        <Route path="/search" component={Search} />
        <Route path="/article/:id" component={ArticleDetail} />
      </Switch>
    </Router>
  );
}
export default Navigation;
