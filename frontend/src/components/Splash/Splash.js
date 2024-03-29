import React from "react";
import { Navlink, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormPage";
import SignupFormModal from "../SignupFormPage";
import "./Splash.css";
import logo from "../../context/bottlenotelogo.png";
import computer from "../../context/splashcomputer.png";
import $ from "jquery";
import Footer from "../Footer/Footer";
// import * as sessionActions from '../../store/session';

function Splash() {
  const sessionUser = useSelector((state) => state.session.user);

  if (sessionUser) {
    return <Redirect to={"/home"} />;
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".splash-header").addClass("active");
    } else {
      $(".splash-header").removeClass("active");
    }
  });

  return (
    <>
      <header className="splash-header">
        <div class="splash-container">
          <div class="logo">
            <img id="splashLogo" src={logo} />
            <h1>Bottlenote</h1>
          </div>
          <nav>
            <ul>
              {/* <li>
              <a href="/about">About</a>
            </li> */}
              <li>
                <LoginFormModal className="button login" />
              </li>
              <li>
                <SignupFormModal className="signup-button" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <body>
        <div className="splashContentContainer">
          <h1 className="splashTitle">Tame your work, organize your life</h1>
          <h2 className="splashSubtitle">
            Remember everything and tackle any project with your notes, tasks,
            and schedule all in one place.
          </h2>
          <div className="splashPicText">
            <div className="splash-extras">
              <img className="splash-computer" src={computer} />
            </div>
            <div className="splashText">
              <h3>Work Anywhere</h3>
              <p>
                Keep shrimportant info handy—your notes sync automatically to
                all your devices.
              </p>
              <h3>Remember Everything</h3>
              <p>
                Kelp make notes more useful by adding text, images, audio,
                scans, PDFs, and documents.
              </p>
              <h3>Turn To-Do Into Done</h3>
              <p>
                Bring your notes, tasks, and schedules tidey to get things done
                more easily.
              </p>
              <h3>Find Things Fast</h3>
              <p>
                Alwaves have what you need, when you need it with powerful,
                flexible search capabilities.
              </p>
            </div>
          </div>
        </div>
      </body>
      <Footer/>
    </>
  );
}

export default Splash;
