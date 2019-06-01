import React from 'react'
import Header from './common/header'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div style={{marginTop: '57px'}}>
          <Route exact path="/" component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
