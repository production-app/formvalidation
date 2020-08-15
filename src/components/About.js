import React from "react";

function About() {
  return (
    <>
      <section id="overview" className="parallax-section">
        <div className="container">
          <div className="row">
            <div
              className="wow fadeInUp col-md-6 col-sm-6"
              data-wow-delay="0.6s"
            >
              <h3>eValid App is a demo App for Form Validation in ReactJs.</h3>
              <p>
                The App is built on Javascript library (ReactJs) and some
                Vanilla JS scripting like Regex Object to have this awesome
                application
              </p>
              <p>
                It's fully responsive and easy User Interface (UI) for better
                User's experience{" "}
                {/* <span aria-label="Emoji" style={{ fontSize: "18px" }}>
                  {" "}
                  ✌️
                </span> */}
                <span style={{ fontSize: "18px" }}>
                  <g-emoji
                    class="g-emoji"
                    alias="ok_hand"
                    fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44c.png"
                  >
                    👌
                  </g-emoji>
                </span>
              </p>
            </div>
            <div
              className="wow fadeInUp col-md-6 col-sm-6"
              data-wow-delay="0.9s"
            >
              <img
                src="images/overview-img.jpg"
                className="img-responsive"
                alt="Overview"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
