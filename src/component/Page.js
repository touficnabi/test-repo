import React, { Component, Fragment } from 'react';
//import ipapi from 'ipapi.co';

class Page extends Component{

    state = {
        ip: null
    }

    getIp = () => {
        // var callback = function(res){
        //     console.log(res);
        // };
        // const testing = ipapi.location(callback);
        // //console.log(testing);

        fetch('https://api.ipify.org?format=json').then(resp => {
            return resp.json()
        }).then(data => {
            console.log(data)
        })
    }

    componentDidMount(){
        this.getIp();
    }

    render(){
        return(
            <Fragment>
                <p>Nothing</p>
            </Fragment>
        )
    }
}

export default Page;