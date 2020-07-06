import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './component/Home.jsx';
import Contact from './component/Contact.jsx';
import Posts from './component/Posts.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Post from './component/Post.jsx';
import States from './component/States.jsx';
import './css/Nav.css';

export default function MyApp() {
  return (
    <>
    <Router>
      <Header/>
      <div id="nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      
        <hr />

        {/*
          Un <Switch> regarde à travers tous ses enfants <Route>
           éléments et rend le premier dont le chemin
           correspond à l'URL actuelle. Utilisez un <Switch> à tout moment
           vous avez plusieurs itinéraires, mais vous n'en voulez qu'un
           d'entre eux à rendre à la fois
        */}
        <Switch>
          <Route exact path="/">
            <Home />
            <States text="Partie 1" subtext="priemier état"/>
            <States text="Partie 2" subtext="deuxième état"/>
            <Post />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    </>
  );
}