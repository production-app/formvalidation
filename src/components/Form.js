import React, { Component } from "react";
import NumberFormat from "react-number-format";
import "./Form.css";
import { Redirect, withRouter } from "react-router-dom";

const initalState = {
  fullName: "",
  email: "",
  phoneNumber: "",
  password: "",
  txtPasswordconfirm: "",
  cardNumber: "",
  expiryDate: "",
  pin: "",
  type: "password",
  score: "null",
  formError: {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    txtPasswordconfirm: "",
    cardNumber: "",
    expiryDate: "",
    pin: ""
  }
};

const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const phoneRegex = RegExp(/^(070|080|090|081)[0-9]{8}$/);
const pinRegex = RegExp(/^[0-9]{4}$/);
const fullRegex = RegExp(/^\w+\s\w+$/);
const cardRegex = RegExp(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/);
const expiryRegex = RegExp(/^\d{2}\/\d{2}$/);
let strongRegex = RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*^?&#><_.+`~=-])[A-Za-z\d$@$!^%*?&#_.><`+=~-]{6,}$/
);

export class Form extends Component {
  state = { ...initalState };

  handleSubmit = e => {
    const { history } = this.props;
    e.preventDefault();

    history.push("/dashboard");
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formError = this.state.formError;
    const passwordInitial = document.getElementById("password").value;
    const passConfirmed = document.getElementById("txtpassword").value;
    const pass = document.getElementById("txtpassword");
    let progress_bar = document.getElementById("bar");

    //Disable onPaste function in confirm password
    pass.onpaste = e => {
      e.preventDefault();
      return false;
    };

    switch (name) {
      case "email":
        formError.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "Must be a valid e-mail address 😠";
        if (!value) {
          formError.email = "😠 Field Required !";
        }
        break;
      case "phoneNumber":
        formError.phoneNumber =
          phoneRegex.test(value) && value.length > 0
            ? ""
            : "Must starts with 070…, 080…, 090…, 081 and 11 characters long 😠 ";
        if (!value) {
          formError.phoneNumber =
            "😠 Field Required | Must be Numeric Value ONLY!";
        }
        break;
      case "pin":
        formError.pin =
          pinRegex.test(value) && value.length > 0
            ? ""
            : "😠 Should be Numeric value and 4 characters long ";
        if (!value) {
          formError.pin = "😠 Field Required | Must be Numeric Value ONLY!";
        }

        break;

      case "fullName":
        formError.fullName =
          fullRegex.test(value) && value.length > 0
            ? ""
            : " 😠 Must not be less than 2 characters, must include a Space and a Last Name";
        if (!value) {
          formError.fullName = " 😠 Field Required !";
        }
        break;

      case "cardNumber":
        formError.cardNumber =
          cardRegex.test(value) && value.length > 0
            ? ""
            : "Must match the ‘XXXX XXXX XXXX XXXX’ format of 16 Numeric Characters Long 😠";
        if (!value) {
          formError.cardNumber =
            " 😠 Field Required | Must be Numeric Value ONLY !";
        }
        break;

      case "expiryDate":
        formError.expiryDate =
          expiryRegex.test(value) && value.length > 0
            ? ""
            : "Must match MMYY format";
        if (!value) {
          formError.expiryDate =
            "😠 Field Required | Must be Numeric Value ONLY !";
        }
        break;

      case "password":
        if (strongRegex.test(value)) {
          progress_bar.classList.add("strong");
          formError.password = "";
        } else if (strongRegex.test(value) === false) {
          progress_bar.classList.add("weak");
          progress_bar.classList.remove("strong");
          //   // progress_bar.classList.remove("weak");

          formError.password =
            "The password should START with least ONE Uppercase character, ONE Number, a Special Characters [#,&,!,@], any characters and must be 6 characters long 😠 😠";
        } else {
        }

        if (
          strongRegex.test(value) &&
          passwordInitial !== passConfirmed &&
          passConfirmed.length
        ) {
          formError.txtPasswordconfirm = " 😠 Please password not match !";
        } else {
          formError.txtPasswordconfirm = "";
        }

        if (!value) {
          formError.password = " 😠 Field Required !";
          progress_bar.classList.remove("weak");
          progress_bar.classList.remove("strong");
        }

        break;
      case "txtPasswordconfirm":
        if (passwordInitial !== passConfirmed) {
          formError.txtPasswordconfirm = " 😠 Please password not match !";
        } else if (!value) {
          formError.txtPasswordconfirm = " 😠Field Required !";
        } else {
          formError.txtPasswordconfirm = "";
        }

        break;

      default:
        break;
    }

    this.setState({ [name]: value });
  };

  validateForm = () => {
    const {
      fullName,
      email,
      phoneNumber,
      password,
      txtPasswordconfirm,
      cardNumber,
      expiryDate,
      pin
    } = this.state;

    if (
      this.state.formError.email ||
      this.state.formError.fullName ||
      this.state.formError.password
    ) {
      return true;
    }

    const isInValid =
      !fullName ||
      !password ||
      !email ||
      password !== txtPasswordconfirm ||
      !cardNumber ||
      !phoneNumber ||
      !expiryDate ||
      !pin;

    return isInValid;
  };

  showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  };

  render() {
    // Fucntion for the Expiration Date

    function limit(val, max) {
      if (val.length === 1 && val[0] > max[0]) {
        val = "0" + val;
      }

      if (val.length === 2) {
        if (Number(val) === 0) {
          val = "01";

          //this can happen when user paste number
        } else if (val > max) {
          val = max;
        }
      }

      return val;
    }

    function cardExpiry(val) {
      let month = limit(val.substring(0, 2), "12");
      let date = limit(val.substring(2, 4), "31");

      return month + (date.length ? "/" + date : "");
    }

    return (
      <>
        <section id="contact" className="parallax-section">
          <div className="container">
            <div className="row">
              <div
                className="wow fadeInUp col-md-offset-1 col-md-5 col-sm-6"
                data-wow-delay="0.6s"
              >
                <div className="contact_des">
                  <h3
                    style={{ fontFamily: "Dancing Script", fontWeight: "600" }}
                  >
                    eValid <em style={{ color: "#f2545f" }}> !</em>{" "}
                    <span style={{ fontFamily: "auto" }}>App </span>
                  </h3>

                  <p>
                    Entries can be made into the form. Make sure all the
                    required fields are filled, properly before submitting the
                    request
                  </p>
                  <p>
                    Do follow the <strong>PROMPT</strong> messages as a guide,
                    when having issue whilst filling the form.
                  </p>

                  <p>
                    Ensure details value are inserted, or otherwise the eValid
                    App will invalidate the users request. You can download the
                    User's guide below
                  </p>

                  <p>
                    Please note that unless the{" "}
                    <strong>
                      <em style={{ color: "red" }}>ERRORS</em>
                    </strong>{" "}
                    are been cleared, you will not be able to submit your
                    request
                  </p>

                  <a href="#" className="btn btn-danger">
                    {" "}
                    DOWNLOAD NOW
                  </a>
                </div>
              </div>
              <div
                className="wow fadeInUp col-md-5 col-sm-6"
                data-wow-delay="0.9s"
              >
                <div
                  className="contact_detail"
                  style={{
                    borderRadius: "7%",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0.5rem 2rem",
                    opacity: "74%"
                  }}
                >
                  <div className="section-title">
                    <h2>
                      {"    "}
                      <i
                        style={{ color: "#72bed9" }}
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>{" "}
                      {"   "}
                      Fill the form
                    </h2>
                  </div>
                  <form noValidate onSubmit={this.handleSubmit.bind(this)}>
                    <input
                      name="fullName"
                      type="text"
                      className={
                        this.state.formError.fullName
                          ? "form-control error"
                          : "form-control"
                      }
                      placeholder="Full Name (e.g. Paul Martins)"
                      onChange={this.handleChange}
                      value={this.state.fullName}
                      noValidate
                    />
                    {this.state.formError.fullName.length > 0 && (
                      <>
                        <span
                          style={{
                            transition: "all 0.4s ease-in-out",
                            color: "red"
                          }}
                        >
                          {" "}
                          {"   "}
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                          >
                            {"      "} {"   "}
                            {this.state.formError.fullName}
                          </i>
                        </span>
                      </>
                    )}
                    <input
                      name="email"
                      type="email"
                      className={
                        this.state.formError.email
                          ? "form-control error"
                          : "form-control"
                      }
                      placeholder="Email (e.g. chike@softcom.co.uk)"
                      onChange={this.handleChange}
                      value={this.state.email}
                      noValidate
                    />
                    {this.state.formError.email.length > 0 && (
                      <>
                        <span
                          style={{
                            transition: "all 0.4s ease-in-out",
                            color: "red"
                          }}
                        >
                          {" "}
                          {"   "}
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                          >
                            {"      "} {"   "}
                            {this.state.formError.email}
                          </i>
                        </span>
                      </>
                    )}
                    <NumberFormat
                      name="phoneNumber"
                      format="###########"
                      className={
                        this.state.formError.phoneNumber
                          ? "form-control error"
                          : "form-control"
                      }
                      placeholder="Phone Number"
                      noValidate
                      onChange={this.handleChange}
                      value={this.state.phoneNumber}
                    />
                    {this.state.formError.phoneNumber.length > 0 && (
                      <>
                        <span
                          style={{
                            transition: "all 0.4s ease-in-out",
                            color: "red"
                          }}
                        >
                          {" "}
                          {"   "}
                          <i
                            className="fa fa-exclamation-triangle"
                            aria-hidden="true"
                          >
                            {"      "} {"   "}
                            {this.state.formError.phoneNumber}
                          </i>
                        </span>
                      </>
                    )}
                    <div>
                      <input
                        name="password"
                        type={this.state.type}
                        id="password"
                        className={
                          this.state.formError.password
                            ? "form-control error"
                            : "form-control"
                        }
                        placeholder="Password"
                        noValidate
                        onChange={this.handleChange}
                        value={this.state.password}
                        maxLength={30}
                      />
                      <div className="bar" id="bar"></div>
                      <span className="password__show" onClick={this.showHide}>
                        {this.state.type === "input" ? "Hide" : "Show"}
                      </span>

                      {this.state.formError.password.length > 0 && (
                        <>
                          <span
                            style={{
                              transition: "all 0.4s ease-in-out",
                              color: "red"
                            }}
                          >
                            {" "}
                            {this.state.formError.password}
                          </span>
                        </>
                      )}
                    </div>
                    <input
                      name="txtPasswordconfirm"
                      type="password"
                      className={
                        this.state.formError.txtPasswordconfirm
                          ? "form-control error"
                          : "form-control"
                      }
                      id="txtpassword"
                      placeholder="Confirm Password"
                      required
                      onChange={this.handleChange}
                      value={this.state.txtPasswordconfirm}
                      maxLength={30}
                    />
                    {this.state.formError.txtPasswordconfirm.length > 0 && (
                      <span
                        style={{
                          transition: " all 0.4s ease-in-out",
                          color: "red"
                        }}
                      >
                        {" "}
                        {"   "}
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                        >
                          {"   "}
                          {this.state.formError.txtPasswordconfirm}
                        </i>
                      </span>
                    )}
                    <NumberFormat
                      format="#### #### #### ####"
                      className={
                        this.state.formError.cardNumber
                          ? "form-control error"
                          : "form-control"
                      }
                      name="cardNumber"
                      placeholder="Credit Card Number (e.g. 0000 0000 3333 0000)"
                      noValidate
                      onChange={this.handleChange}
                      value={this.state.cardNumber}
                    />
                    {this.state.formError.cardNumber.length > 0 && (
                      <span
                        style={{
                          transition: "all 0.4s ease-in-out",
                          color: "red"
                        }}
                      >
                        {" "}
                        {"   "}
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                        >
                          {"   "}
                          {this.state.formError.cardNumber}
                        </i>
                      </span>
                    )}
                    <NumberFormat
                      format={cardExpiry}
                      name="expiryDate"
                      className={
                        this.state.formError.expiryDate
                          ? "form-control error"
                          : "form-control"
                      }
                      placeholder="Expiration date (e.g. 0903)"
                      noValidate
                      onChange={this.handleChange}
                      value={this.state.expiryDate}
                    />
                    {this.state.formError.expiryDate.length > 0 && (
                      <span
                        style={{
                          transition: " all 0.4s ease-in-out",
                          color: "red"
                        }}
                      >
                        {" "}
                        {"   "}
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                        >
                          {"   "}
                          {this.state.formError.expiryDate}
                        </i>
                      </span>
                    )}
                    <NumberFormat
                      name="pin"
                      //format="####"
                      maxLength="4"
                      type="password"
                      className={
                        this.state.formError.pin
                          ? "form-control error"
                          : "form-control"
                      }
                      placeholder="PIN (e.g. 1234)"
                      noValidate
                      onChange={this.handleChange}
                      value={this.state.pin}
                    />
                    {this.state.formError.pin.length > 0 && (
                      <span
                        style={{
                          transition: " all 0.4s ease-in-out",
                          color: "red"
                        }}
                      >
                        {" "}
                        {"   "}
                        <i
                          className="fa fa-exclamation-triangle"
                          aria-hidden="true"
                        >
                          {"   "}
                          {this.state.formError.pin}
                        </i>
                      </span>
                    )}
                    <br /> <br />
                    <div className="col-md-6 col-sm-10">
                      <input
                        name="submit"
                        type="submit"
                        className="form-control"
                        id="submit"
                        defaultValue="SEND"
                        disabled={this.validateForm()}
                        title={
                          this.validateForm()
                            ? "Button disabled, inputs required !"
                            : "Enabled !...Kindly submit"
                        }
                      />{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Form);
