import React from "react";

function Card() {
  return (
    <div className="col mb-4">
        <div className="card-deck">
            <div className="card">
                <img src="Assets/Images/wikidrinks.png" className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h5 className="card-title">{this.name}</h5>
                <p className="card-text">{this.name}</p>
                <p class="card-text font-weight-bold"><a href="https://github.com/raul-ae/project-1.git" class="links" target="_blank">Github Project Link</a></p>
                <div class="text-center">
                    <a href="https://raul-ae.github.io/project-1/" target="_blank" class="btn btn-outline-dark" role="button">Go to the page</a>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
