import React, {useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//language
import { I18nProvider, LOCALES } from './i18n';

import Homepage from './component/homepage';
import About from './component/About';

function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [bodyClass, setBodyClass] = useState('lang-EN');
  const body = document.querySelector('body');
  //lang button click handler
  // langButtonClickHandler = LANG => {
  //   setLocale(LOCALE.LANG);
  //   console.log(LANG)
  // }

  return (
    <I18nProvider locale={locale}>
    <Router>
      <div className={`App ${bodyClass}`}>
        <button 
          onClick={() => {
            setLocale(LOCALES.FRENCH); 
            console.log('fr')
            setBodyClass('lanf-fr')
            }}
        >FR</button>
        
        <button 
          onClick={() => {
            setLocale(LOCALES.ENGLISH);
            console.log(body)
            setBodyClass('lanf-en')
          }}
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

export default App;
