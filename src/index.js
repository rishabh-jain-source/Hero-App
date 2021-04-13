import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard'
import Heroes from './Components/Heroes'
import Header from './Components/Header';

import { addHero } from './Actions/heroes'
import store from './store/configStore'
import HeroList from './Components/HeroList';
import Edit from './Components/edit'


store.dispatch(addHero( { id: 20, name: 'Tornado' }))


//console.log(heroOne)
const NoFound = () => (
  <h1>No Component Found</h1>
)


const MyRoutes=()=>(

  <BrowserRouter>
    <Header/>
    <Switch>
      <Route path='/dashboard' component={Dashboard} exact={true}/>
      <Route path='/heroes' component={Heroes} exact={true}/>
      <Route path='/heroes/:id' component={Heroes} exact={true}></Route>
      <Route path='/edit/:id' component={Edit} exact={true}></Route>
      <Route component={NoFound} ></Route>
    </Switch>
   
  </BrowserRouter>
 
)

const jsx = (
  <Provider store={store}>
    <MyRoutes/>
  </Provider>
)

ReactDOM.render(jsx,document.getElementById('root'))


reportWebVitals();
