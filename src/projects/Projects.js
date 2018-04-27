import React, { Component } from 'react';
import '../App.css';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <Project />
      </div>
    );
  }
}

const projectData = [
  {
    "iconFile": "path to icon 1",
    "title": "dummy1",
    "description": "desc1" 
  },
  {
    "iconFile": "path to icon 1",
    "title": "dummy1",
    "description": "desc1"
  },
  {
    "iconFile": "path to icon 1"
    "title": "dummy1",
    "description": "desc1"
  }
];