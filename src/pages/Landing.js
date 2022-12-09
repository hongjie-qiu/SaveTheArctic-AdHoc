import React from "react";
import "../css/landing_page.css";
import Footer from '../components/layout/Footer.js';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseUIConfig = {
  signInOptions: [
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: "popup",
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    },
  },
};

function LandingPage(props) {
  let auth = getAuth();
  const isLoggedIn = props.isLoggedIn;
  return (
    <React.Fragment>
      <div className="banner-container">
        <img
          src={require("../images/polar-bear2.jpeg")}
          alt="a variety of arctic animals"
        />
        <div id="callout">
          <div className="banner-slogan">
            <p>Take Actions Today to Save the Arctic Wildlife</p>
          </div>
          <div>
            <h2> Get Started! </h2>
            {isLoggedIn ? (
              <div className="app__headerLoggedIn">
                <button className="firebase-logout" onClick={() => auth.signOut()}>Log Out</button>
              </div>
            ) : (
              <StyledFirebaseAuth
                uiConfig={firebaseUIConfig}
                firebaseAuth={auth}
                aria-label="sign in"
              />
            )}
          </div>
        </div>
      </div>

      <section className="advise--section">
        <div className="second-advise">
          <div className="top-svg">
            <img
              className="svg1 image1"
              src={require("../images/help-seal.jpeg")}
              alt="help the seal slogan"
            />
          </div>
          <div>
            <div>
              <div>
                <h2 className="lil">
                  <strong>About Save the Arctic</strong>
                </h2>
              </div>
            </div>

            <p className="texts pl">
              Save the Arctic is part of the INFO 442 class project. It is a web
              application for helping wildlife of the Arctic that are impacted
              by global warming. By educating users about wildlife, providing
              the environmental impact of a small action, and prompting users to
              take quizzes after reading the information. Save the Arctic
              encourages its users to learn challenging issues of wildlife
              conservation and take sustainable actions to improve the living
              condition of Arctic wildlife.
            </p>
          </div>
        </div>

        <div className="third-advise">
          <div>
            <div>
              <div>
                <h2 className="lil">
                  <strong>Current Situation</strong>
                </h2>
              </div>
            </div>

            <p className="texts pl">
              Over the past century, human activities have been responsible for
              almost all of the increase in greenhouse gasses in the atmosphere,
              which becomes the main contributor of global warming and thus
              brings a huge impact on the Arctic wildlife. Because of rapid
              industrialization and urbanization, the excessive amount of carbon
              emission has exacerbated global warming, which directly affects
              the wildlife in the Arctic. The loss of genetic diversity
              increases the risk of extinction of a population through
              inbreeding suppression. In addition, the amount of deleterious
              genetic variation could make the population vulnerable by
              accumulating in a small population through genetic drift.
            </p>
          </div>
          <div className="top-svg2">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ZGG9n7lJEYg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="second-advise section3">
          <div className="top-svg">
            <img
              className="svg1 image3"
              src={require("../images/donation.jpeg")}
              alt="point and donation system introduction"
            />
          </div>
          <div>
            <div>
              <div>
                <h2 className="lil">
                  <strong>Point & Donation System</strong>
                </h2>
              </div>
            </div>

            <p className="texts pl">
              You can do quizes that test your understanding of the card
              information, more specifically, your undertanding of environmental topics and issues, 
              and earn different number of points depending on the
              correctness. You can check how many points you have earned and the
              total amount of money that you have donated. Once you get
              certain points, our website will automatically donate to a chosen
              organization for you, and the total amount of how
              much money have been donated will be shown in the points page. Plus, a variety of environmental
              organizations are provided in the points page for you to learn more about each and choose whichever you want
              to make donations to.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default LandingPage;
