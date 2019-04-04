import React, { Component } from 'react';
import Dashboard from './js/page/dashboard/Dashboard'
import Header from "./js/layout/Header";
import Footer from "./js/layout/Footer";
import Home from "./js/page/home/Home";
import Translations from "./js/page/translations/Translations";
import Media from "./js/page/media/Media";
import Contact from "./js/page/contact/Contact";
import BasicLayout from './js/layout/BasicLayout';

import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

const MainTemplate=({children})=>(
  <div>
      <Header/>
      <BasicLayout
        children={children}
      />
      <Footer/>
  </div>
)

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
          <MainTemplate>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path={"/home"} component={Home}/>
                <Route path={"/przeklady"} component={Translations} />
                <Route path={"/media"} component={Media}/>
                <Route path={"/kontakt"} component={Contact}/>
                {/* <Route component={NotFound} /> */}
            </Switch>
          </MainTemplate>
       </div>
      </HashRouter>
  
    );
  }
}

export default App;
