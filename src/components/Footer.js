import React from "react";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p className="wow fadeInUp" data-wow-delay="0.6s">
                Copyright © {year} | email: developerbiodun@gmail.com
              </p>
              <ul className="social-icon">
                <li>
                  <a
                    href="#"
                    className="fa fa-facebook wow fadeInUp"
                    data-wow-delay="1s"
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-twitter wow fadeInUp"
                    data-wow-delay="1.3s"
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-dribbble wow fadeInUp"
                    data-wow-delay="1.6s"
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-behance wow fadeInUp"
                    data-wow-delay="1.9s"
                  />
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-google-plus wow fadeInUp"
                    data-wow-delay="2s"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <a href="#back-top" className="go-top">
        <i className="fa fa-angle-up" />
      </a>
    </>
  );
}
