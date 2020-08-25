import React from "react";

function Hero() {
  return (
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row justify-content-md-center" style={{paddingTop:"25px;"}}>
                <div class="col-md-3">
                <div>
                    <img class="align-self-center mr-3 imagew" src={require("../Assets/Images/Rodrigo.jpg")} alt="Rodrigo Rosas Valdes"></img>
                </div>
                </div>
                <div class="col-md-9">
                <div>
                    <h1 class="display-4">Rodrigo Rosas Valdes</h1>
                    <p class="lead">SCRUM Master | Project Manager | Business Analyst | Learning to Code</p>
                </div>
                <div class="">
                    Social Media: 
                    <a href="https://github.com/rodrigorosasv" target="_blank" class="links"><i class="fab fa-github"></i> Github  | </a>
                    <a href="https://www.linkedin.com/in/rodrigo-rosas-valdes/" target="_blank" class="links"><i class="fab fa-linkedin"></i> Linkedin  | </a>
                    <a href="./Assets/RRV_CV.pdf" target="_blank" class="links"><i class="fas fa-address-card"></i> CV </a>
                </div>
                <div class="media-body">
                    Contact: 
                    <a href="tel:+5215518342226" target="_blank" class="links"><i class="fas fa-phone-square-alt"></i> +52 1 5518342226  | </a>
                    <a href="mailto:rodrigo.rosasv@gmail.com" target="_blank" class="links"><i class="fas fa-envelope-square"></i> rodrigo.rosasv@gmail.com </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
