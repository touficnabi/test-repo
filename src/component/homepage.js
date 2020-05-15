import React, { Component, Fragment } from 'react';

import translate from '../i18n/translate';

class Homepage extends Component{
    render(){
        return(
            <Fragment>

                <div className="main">
                    <h1>{translate('unlock')}</h1>
                    <h1>{translate('win')}</h1>
                    <h1>{translate('money')}</h1>
                    <p>{translate('home.heading')}</p>
                </div>
            
            </Fragment>
        );
    }
}

export default Homepage;