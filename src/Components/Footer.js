import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-info">
        <div>
          <div className="row">
         
            <div className="col-md-3  footer-box mt-2">
              <h1 className="content"> <b>Calculators</b> </h1>
              <p style={{ color: 'white' }}>
                <p>Personal Loan EMI Calculator</p>
                <p> Car Loan EMI Calculator</p>
                <p>Two Wheeler EMI Calculator</p>
                <p>Recurring Deposit Calculator</p>
                <p> Loans On Credit Card EMI Calculator</p>
                <p>Debit Cards Calculator</p>
              </p>
            </div>
            <div className="col-md-3  col-xl-3 col-lg-3 footer-box">
              <h1 className="content"><b>UseFul Links</b></h1>
              <p className="content">
                <p>Privacy</p>
                <p>Important Messages</p>
                <p>RBI Kehta Hai</p>
                <p>Quick Links</p>
                <p>Citizen's Charter</p>
                <p> Apply for Credit Card</p>
              </p>
            </div>
            <div className="col-md- col-3  col-xl-3 col-lg-3 footer-box">
              <h1 className="content"><b>Customer Service</b></h1>
              <p className="content">
                <p>Privacy</p>
                <p>Important Messages</p>
                <p>RBI Kehta Hai</p>
                <p>Quick Links</p>
                <p>Citizen's Charter</p>
              </p>
            </div>
            <div className="col-md-4 col-4 col-xl-3 col-lg-3 footer-box">
              <h1 className="content"><b>About Max Life</b></h1>
              <p className="content">
               <p> Download Premium Receipts</p>
               <p> Track Applications</p>
               <p>  Claims Centers</p> 
               <p> Download Policy Pack</p>
               <p>  View Policy Details</p>
              </p>
            </div>
           
          </div>
        </div>
      
    </div>
  );
};
export default Footer;