import './App.css'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <div>
        <Router></Router>
        <Navbar/>
        <Switch>
          <Route path='/'><News pageSize={5} country="in" categpory="general"/></Route>
          <Route path='/business'><News pageSize={5} country="in" categpory="business"/></Route>
          <Route path='/entertainment'><News pageSize={5} country="in" categpory="entertainment"/></Route>
          <Route path='/general'><News pageSize={5} country="in" categpory="general"/></Route>
          <Route path='/health'><News pageSize={5} country="in" categpory="health"/></Route>
          <Route path='/science'><News pageSize={5} country="in" categpory="science"/></Route>
          <Route path='/sports'><News pageSize={5} country="in" categpory="sports"/></Route>
          <Route path='/technology'><News pageSize={5} country="in" categpory="technology"/></Route>
        </Switch>
      </div>
    )
  }
}
