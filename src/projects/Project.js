import React, { Component } from 'react';
import '../App.css';

// Project should have a heading, picture, description and link to a page
export default class Project extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-lg-1 well">
          <img>{this.props.icon}</img>
        </div>
        <div className="col-lg-2 well">
          <h3 >{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}