import React from 'react';
import { Link } from 'react-router';

export default class LoggedInPage extends React.Component{
  render(){
    return (
      <div>
        <h1> hello {window.janrain}</h1>
        
      </div>
    );    
  }
}