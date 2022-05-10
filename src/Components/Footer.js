import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3  footer-box">
              <p className="content"> <b>Calculators</b> </p>
              <p style={{ color: 'white' }}>
                <p>Personal Loan EMI Calculator</p>
                <p> Car Loan EMI Calculator</p>
                <p>Two Wheeler EMI Calculator</p>
                <p>Recurring Deposit Calculator</p>
                <p> Loans On Credit Card EMI Calculator</p>
                <p>Debit Cards Calculator</p>
              </p>
            </div>
            <div className="col-md-3 col-3 col-sm-3 col-xl-3 col-lg-3 footer-box">
              <p className="content"><b>UseFul Links</b></p>
              <p className="content">
                <p>Privacy</p>
                <p>Important Messages</p>
                <p>RBI Kehta Hai</p>
                <p>Quick Links</p>
                <p>Citizen's Charter</p>
                <p> Apply for Credit Card</p>
                <p>Login to NetBanking</p>
              </p>
            </div>
            <div className="col-md-3 col-3 col-sm-3 col-xl-3 col-lg-3 footer-box">
              <p className="content"><b>Customer Service</b></p>
              <p className="content">
                <p>Privacy</p>
                <p>Important Messages</p>
                <p>RBI Kehta Hai</p>
                <p>Quick Links</p>
                <p>Citizen's Charter</p>
                <p> Apply for Credit Card</p>
                <p>Login to NetBanking</p>
              </p>
            </div>
            <div className="col-md-3 col-3 col-sm-3 col-xl-3 col-lg-3 footer-box">
              <p className="content"><b>UseFul Links</b></p>
              <p className="content">
               <p> Download Premium Receipts</p>
               <p> Track Applications</p>
               <p>  Claims Centers</p> 
               <p> Download Policy Pack</p>
               <p>  View Policy Details</p>
               <p>  Electronics Insurance Account</p>
               <p> Frequently Asked Questions(FAQs)</p>

              </p>
            </div>
          
          </div>
          <div className="col-md-5  col-sm-12 col-xl-3 col-lg-2 footer-box">
              <p className="content"><b>SUBSCRIBE NEWS LETTER</b></p>
              <input type="email" className="form-control" placeholder="Your Email" />
              <button className="btn btn-success">Subscribe</button>
            </div>
        </div>
      </section>

    </div>

  );
};
export default Footer;