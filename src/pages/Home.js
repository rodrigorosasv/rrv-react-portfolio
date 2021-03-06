import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="container">
        <div className="row" style={{margin: "5px;"}}>
            <h3>Some information about me</h3>
            <p className="mt-0">Motivated and skilled professional with more than 7 years of experience and a proven record managing E-commerce, IT and Digital projects from concept to completion and support. Strong business analysis and product management skills, including analytical thinking, creative problem solving and self-learning. 
                Passionate about technology, e-commerce and the digital industry. Always looking for the last tendencies, technology and practices to help achieving business goals.

            </p>
            <p className="mt-0">Fullstack developer, please check my development portfolio..</p>
        </div>

        <div className="row" style={{margin: "5px;"}}>
            <h3>My experience in</h3>
        </div>

        <div className="row row-cols-1 row-cols-md-3">
            <div className="col mb-4">
                <div className="card h-100">
                    <img src={require("../Assets/Images/coding.jpg")} class="card-img-top" alt="Development"></img>
                    <div className="card-body">
                        <h5 className="card-title">Development</h5>
                        <p className="card-text">
                        Fullstack Developer:
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>JQuery</li>
                            <li>Node</li>
                            <li>MySQL</li>
                            <li>Mongo</li>
                            <li>React</li>
                        </ul>
                        </p>
                    </div>
                    <div className="text-center marginbutton">
                    <Link
                        to={process.env.PUBLIC_URL + '/portfolio'}
                        className="btn btn-outline-dark"
                        target="_self"
                        role="button"
                        >
                        Portfolio
                    </Link>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card h-100">
                    <img src={require("../Assets/Images/pmanagement.jpg")} className="card-img-top" alt="Project Management"></img>
                    <div className="card-body">
                        <h5 className="card-title">Project Management</h5>
                        <p className="card-text">More than 7 years managing high impact digital projects for multiple companies like Volaris and Bluemessaging.</p>
                    </div>
                    <div className="text-center marginbutton">
                        <Link
                            to={process.env.PUBLIC_URL + '/projectm'}
                            className="btn btn-outline-dark"
                            target="_self"
                            role="button"
                            >
                            Project Management
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col mb-4">
                <div className="card h-100">
                    <img src={require("../Assets/Images/consulting.jpeg")} className="card-img-top" alt="Consulting"></img>
                    <div className="card-body">
                        <h5 className="card-title">IT Consulting</h5>
                        <p className="card-text">+6 years working as a consultor and business analyst, applying IT best practices. </p>
                    </div>
                    <div className="text-center marginbutton">
                        <Link
                            to={process.env.PUBLIC_URL + '/itconsulting'}
                            className="btn btn-outline-dark"
                            target="_self"
                            role="button"
                            >
                            Consulting
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Home;
