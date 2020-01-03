import React from 'react';
import { Redirect } from 'react-router-dom';

function Guard(props){
    var isUserLoggedIn = localStorage.getItem('isLoggedIn');

    if(isUserLoggedIn){
        return props.children;
    }else{
        return <Redirect to="/login" />
    }
}

export default Guard