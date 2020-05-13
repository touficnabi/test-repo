import React, { Component, Fragment } from 'react';

import translate from '../i18n/translate';

class Homepage extends Component{
    render(){
        return(
            <Fragment>

                <div className="main">
                    <h1>{translate('win')}</h1>
                </div>
            
            </Fragment>
        );
    }
}

export default Homepage;