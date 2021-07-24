import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const portfolio = () => {
    return (
        <div className="portfolioApp">
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            Portfolio
                    </h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-1">
                            </div>

                            <div className="col-md-3">
                                <a href="https://lightcville.herokuapp.com/login">
                                    <img src="hw20-react-portfolio/Assets/proj2-login.png"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href="https://lightcville.herokuapp.com/login">Project 2</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://gitoffmyfarm.github.io/Recipe-Box/">
                                    <img src=""
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href="https://gitoffmyfarm.github.io/Recipe-Box/">Project 1</a></p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="https://chrisz304.github.io/HW4-code-quiz/">
                                    <img src="hw20-react-portfolio/Assets/proj2-login.png"
                                        className="card-img-top" alt="img-three" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href="https://chrisz304.github.io/HW4-code-quiz/">Code Quiz</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="https://drive.google.com/file/d/1xz21WXZYYLq2fOlAqnamnDUYXRaSV0zW/view">
                                    <img src=""
                                        className="card-img-top" alt="img-four" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href="https://github.com/ChrisZ304/HW12-employeeDB">employeeDB</a></p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="https://chrisz304.github.io/HW3-password-generator/">
                                    <img src="hw20-react-portfolio/Assets/proj2-login.png"
                                        className="card-img-top" alt="img-five" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href="https://chrisz304.github.io/HW3-password-generator/">Password Generator</a></p>
                            </div>
                            <div className="col-md-1"></div>


                            <div className="col-md-3">
                                <a href="https://cz-workout-tracker.herokuapp.com/">
                                    <img src="hw20-react-portfolio/Assets/proj2-login.png"
                                        className="card-img-top" alt="img-six" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href="https://cz-workout-tracker.herokuapp.com/">Workout Tracker</a></p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        <br></br>
                        <div className="gitProfile">
                            <p>GitHub Profile: <a href="https://github.com/ChrisZ304">
                            https://github.com/ChrisZ304</a> </p>
                            <p>Linkedin Profile: <a href="www.linkedin.com/in/christopher-zacharias"
                            >www.linkedin.com/in/christopher-zacharias</a></p>
                            <p>Email Address: c.zacharias2021@gmail.com</p>
                            <p>Phone Number:(434)-327-8757</p>
                        </div>
                           <footer>CZ Portfolio 2021</footer>

                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio