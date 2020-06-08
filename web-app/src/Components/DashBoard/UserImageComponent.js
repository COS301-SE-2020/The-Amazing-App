import React from "react";
import image2 from "./no_picture.jpg";

class UserImageComponent extends React.Component {
  render() {
    return (
      <img src={image2} className="ui small circular image" alt="userImage" style={{ marginTop: 12 }}/>
    );
  }
}

export default UserImageComponent;
