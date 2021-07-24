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
                                <p id="repo"><a href="https://github.com/ChrisZ304/lightCville">https://github.com/ChrisZ304/lightCville</a></p>
                            </div>
                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="">
                                    <img src=""
                                        className="card-img-top" alt="img-two" />
                                </a>
                                <p className="card-text">Day Planner</p>
                                <p id="repo"><a href=""
                                ></a></p>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Code Quiz</p>
                                <p id="repo"><a href=""
                                ></a></p>
                            </div>
                            <div className="col-md-1">

                            </div>
                            <div className="col-md-3">
                                <a href="">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Project-1</p>
                                <p id="repo"><a href=""
                                ></a></p>
                                <div className="col-md-1"></div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <a href="">
                                    <img src=""
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text">Password Generator</p>
                                <p id="repo"><a href=""
                                ></a></p>

                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-3">
                                <a href="">
                                    <img src="a"
                                        className="card-img-top" alt="img-one" />
                                </a>
                                <p className="card-text"></p>
                                <p id="repo"><a href=""
                                ></a></p>

                            </div>
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
                    </div>

                </div>






            </div>
        </div>
    )
}
export default portfolio