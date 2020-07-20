import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" style={{backgroundColor: "#2A9D8F", bottom: 0, position: "absolute", width: "100%"}} >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} <a href="#"> The Amazing App </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;