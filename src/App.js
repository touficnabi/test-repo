import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cookie from 'js-cookie';

//language
import { I18nProvider, LOCALES } from './i18n';

import Homepage from './component/homepage';
import About from './component/About';

class App extends Component {


  state = {
    locale : LOCALES.ENGLISH,
    bodyClass : 'lang-en'
  }

  

  langButtonClickHandler = lang => {
    this.setState({
      locale: lang,
      bodyClass: lang
    })

    Cookie.set('lang-selected', true);
    Cookie.set('lang-preferance', lang)
  }

  componentDidMount(){
    const langSelected = Cookie.get('lang-selected');
    const langPreferance = Cookie.get('lang-preferance');
    if (langSelected){
      this.setState({
        locale: langPreferance,
        bodyClass : langPreferance
      })
    }
  }


  render(){
  return (
    <I18nProvider locale={this.state.locale}>
    <Router>
      <div className={`App ${this.state.bodyClass}`}>
        <button 
          onClick={() => this.langButtonClickHandler(LOCALES.FRENCH)}
        >FR</button>
        
        <button 
          onClick={() => this.langButtonClickHandler(LOCALES.ENGLISH)}
        >EN</button>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </Router>
    </I18nProvider>
  );
  }
}

export default App;
