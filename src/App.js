import React, { Component } from 'react';
import DashboardPage from './js/page/dashboard/DashboardPage'
import Header from "./js/layout/Header";
import Footer from "./js/layout/Footer";
import HomePage from "./js/page/home/HomePage";
import TranslationsPage from "./js/page/translations/TranslationsPage";
import MediaPage from "./js/page/media/MediaPage";
import ContactPage from "./js/page/contact/ContactPage";
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
                <Route exact path="/" component={DashboardPage} />
                <Route path={"/home"} component={HomePage}/>
                <Route path={"/przeklady"} component={TranslationsPage} />
                <Route path={"/media"} component={MediaPage}/>
                <Route path={"/kontakt"} component={ContactPage}/>
                {/* <Route component={NotFound} /> */}
            </Switch>
          </MainTemplate>
       </div>
      </HashRouter>
  
    );
  }
}

export default App;
