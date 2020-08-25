import React from "react";

function Itconsulting() {
  return (
    <div className="container" style={{marginBottom:"100px;"}}>
          <div class="row marginport" id="consulting">
      <h2>Business Analysis and Consulting</h2>
        <div class="card-deck" >
          <div class="card">
            <img class="card-img-top" src="Assets/Images/mobileapp.jpg" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Volaris Mobile Apps</h5>
              <p class="card-text">Connect TML base application with Volaris systems.</p>
              <div class="text-center">
                <a href="https://play.google.com/store/apps/details?id=com.volaris.android" target="_blank" class="btn btn-outline-dark" role="button">See more</a>
            </div> 
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="Assets/Images/vpass.png" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">V.Pass Subscriptions</h5>
              <p class="card-text">Designed the first airline tickets subscription together with Caravelo. We connected Volaris systems to Vpass.</p>
              <div class="text-center">
                <a href="https://vpass.volaris.com/y4/subscriptions" target="_blank" class="btn btn-outline-dark" role="button">See more</a>
            </div>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="Assets/Images/vane.png" alt="Card image cap"></img>
            <div class="card-body">
              <h5 class="card-title">Vane Chatbot Volaris</h5>
              <p class="card-text">Connected Facebook Messenger with Volaris environment, added multiple functionality for the customer to book a flight, add extra services and do check-in</p>
              <div class="text-center">
                <a href="https://www.messenger.com/t/viajavolaris" target="_blank" class="btn btn-outline-dark" role="button">See more</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itconsulting;
