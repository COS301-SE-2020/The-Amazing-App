import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4" style={{backgroundColor: "#2A9D8F", bottom: 0, position: "absolute", width: "100%"}} >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{color: "white"}}>
          All Rights Reserved<a href="#">. The Amazing App </a>&copy; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;