import React, { Component } from "react";
import Projects from "../portfolio.json";
// import Card from "../components/Card";

class Portfolio extends Component {
  state = {
    Projects
  };

  
  render() {
    return (
      <div className="container" style={{marginBottom:"100px;"}}>
        <h2>Development Portfolio</h2>
        <div className="row row-cols-1 row-cols-md-3">
          {this.state.Projects.map(project =>(
            <div className="col mb-4">
              <div className="card-deck">
                  <div className="card">
                      <img src={project.image} className="card-img-top" alt="..."></img>
                      <div className="card-body">
                      <h5 className="card-title">{project.name}</h5>
                      <p className="card-text">{project.description}</p>
                      <p class="card-text font-weight-bold"><a href={project.github} class="links" target="_blank">Github Project Link</a></p>
                      <div class="text-center">
                          <a href={project.link} target="_blank" class="btn btn-outline-dark" role="button">Go to the page</a>
                      </div>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
