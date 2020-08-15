import React from "react";

export default function Banner() {
  return (
    <>
      <section id="intro" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <h3 className="wow bounceIn" data-wow-delay="0.9s">
                <img
                  src="../images/react.png"
                  style={{ width: "12%", borderRadius: "23%" }}
                />
              </h3>
              <h1 className="wow fadeInUp" data-wow-delay="1.6s">
                Form Validation App
              </h1>

              <a
                href="#contact"
                className="btn btn-lg btn-danger smoothScroll wow fadeInUp"
                data-wow-delay="2.3s"
              >
                DEMO NOW...
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
