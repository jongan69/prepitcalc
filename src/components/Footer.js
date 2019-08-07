import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

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
            <p>
              "Eat food as your medicine or you''ll eat medicine as your food"
            </p>
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="cryptocurrensea.io"> Cryptocurrensea </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;