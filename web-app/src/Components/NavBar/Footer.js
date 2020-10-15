import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <MDBFooter
      className="font-small fixed-bottom"
      style={{
        backgroundColor: "#2A9D8F",
        position: "absolute",
        width: "100%",
        bottom: 0,
        height: "3.5em",
      }}
    >
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid style={{ color: "white" }}>
          All Rights Reserved<a href="#">. The Amazing App </a>&copy;{" "}
          {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
};

export default Footer;
