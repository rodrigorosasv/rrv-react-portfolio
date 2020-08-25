import React from "react";

function Footer() {
  return (
    <footer style={{marginTop: "100px"}}>
        <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">
            <div className="navbar-text mx-auto">
                <div className="media-body">
                    <a href="https://github.com/rodrigorosasv" target="_blank" className="links"><i className="fab fa-github"></i> Github  | </a>
                    <a href="https://www.linkedin.com/in/rodrigo-rosas-valdes/" target="_blank" className="links"><i className="fab fa-linkedin"></i> Linkedin  | </a>
                    <a href="tel:+5215518342226" target="_blank" className="links"><i class="fas fa-phone-square-alt"></i> +52 1 5518342226  | </a>
                    <a href="./Assets/RRV_CV.pdf" target="_blank" className="links"><i class="fas fa-address-card"></i> CV  | </a>
                    <a href="mailto:rodrigo.rosasv@gmail.com" target="_blank" className="links"><i className="fas fa-envelope-square"></i> rodrigo.rosasv@gmail.com </a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;






