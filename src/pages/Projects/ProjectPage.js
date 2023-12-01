import './Projects.css';

import React, { Component } from 'react'

class ProjectPage extends Component  {
    render(){
        return (
            <div className="Projects">
                <div className="project-heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
}

export default ProjectPage