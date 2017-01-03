import React from 'react';
import { Link } from 'react-router';
import LoggedInPage from './LoggedInPage';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <LoggedInPage />
      </div>
    );
  }
}