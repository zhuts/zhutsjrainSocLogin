import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <p>
            Header
          </p>
        </header>

        <div id="janrainEngageEmbed"></div>

        <div className="app-content">{this.props.children}</div>
        
        <footer>
          <p>
            This is a demo app for Janrain.
          </p>
        </footer>
      </div>
    );
  }
}