import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';




const Quoteswitcher = () => {
  const rand = Math.floor(Math.random() * 4) + 1;
  if (rand === 1) {
    return <p> “It is health that is real wealth and not pieces of gold and silver.” Mahatma Gandhi</p>;
  }
  if (rand === 2) {
    return <p> “Health is not valued till sickness comes.” Thomas Fuller</p>;
  }
  return <p> “Health is the greatest gift.” Buddha </p>;
};

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-3 mt-1" style={{ alignItems: 'center' }}>
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">
              <a href="https://prepit.org">
              Prepit
              </a>
            </h5>

              {Quoteswitcher()}
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="http://cryptocurrensea.io"> Cryptocurrensea </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;