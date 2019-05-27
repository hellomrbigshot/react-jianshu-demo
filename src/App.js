import React from 'react'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail" component={Detail}></Route>
      </Router>
    </Provider>
  );
}

export default App;
