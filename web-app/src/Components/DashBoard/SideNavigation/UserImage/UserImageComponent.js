import React from "react";
import image2 from "../../../../assets/no_picture.jpg";

class UserImageComponent extends React.Component {
  render() {
    return (
      <img
        src={image2}
        className="ui small circular image"
        alt="userImage"
        style={{ marginTop: 12, marginLeft: 25, height: 100, width: 100 }}
      />
    );
  }
}

export default UserImageComponent;
