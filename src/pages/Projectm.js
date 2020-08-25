import React from "react";

function Projectm() {
  return (
    <div className="container" style={{marginBottom:"100px;"}}>
      <div className="row marginport" id="pmanage">
        <h2>Project Management</h2>
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={require("../Assets/Images/newvolaris.png")} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">New Gen Volaris.com</h5>
              <p className="card-text">  
                <ul>
                  <li>Microservices based app</li>
                  <li>Angular</li>
                  <li>Progressive web app</li>
                  <li>Rest APIs</li>
                  <li>Devops</li>
                </ul>
              </p>
                <div className="text-center disabled">
                  <a href="https://www.volaris.com/" target="_blank" className="btn btn-outline-dark" role="button">Coming soon</a>
              </div>   
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../Assets/Images/currentvolaris.png")} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Volaris.com</h5>
              <p className="card-text">
                <ul>
                  <li>MVC Application</li>
                  <li>Responsive first</li>
                  <li>Episerver CMS</li>
                  <li>Dockers</li>
                  <li>Devops</li>
                </ul>
              </p>
              <div className="text-center">
                <a href="https://www.volaris.com/" target="_blank" className="btn btn-outline-dark" role="button">See more</a>
            </div> 
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={require("../Assets/Images/mytrips.png")} alt="Card image cap"></img>
            <div className="card-body">
              <h5 className="card-title">Volaris Manage my Booking</h5>
              <p className="card-text">
                <ul>
                  <li>MVC Application</li>
                  <li>Responsive first</li>
                  <li>Episerver CMS</li>
                  <li>SOAP APIs</li>
                </ul>
              </p>
              <div className="text-center">
                <a href="https://mytrips.volaris.com/" target="_blank" className="btn btn-outline-dark" role="button">See more</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectm;
