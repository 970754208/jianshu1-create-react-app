import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont';
import Header from './common/header/index.jsx';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

const App = () => {
  return ( 
    <div className="app">
      <GlobalStyle />
      <IconFont />
      <Router>
        <div>
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/detail/:page' component={Detail} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
        </div>
      </Router>
    </div>
   );
}
 
export default App;