import React from "react";
import { Dropdown, Icon, Modal, Button } from "semantic-ui-react";
import image2 from "../../Assets/no_picture.jpg";
import UpdatePreferences from "./UpdatePreferences";
import axios from "axios";
import Cookies from "js-cookie";

/*const instance = axios
  .get("http://localhost:8000/api/auth/me", {
    headers: { Authorization: "Bearer " + Cookies.get("token") },
  })
  .then((res) => {
    if (res.status == 200) {
      Cookies.set("username", res.data.data.username, { expires: 2 });
    }
  })
  .catch((error) => {
    console.log(error.message);
  });*/

const trigger = (
  <div>
    <img
      src={image2}
      className="ui avatar image"
      alt="userImage"
      style={{ height: 18, width: 18 }}
    />
    <span style={{ fontSize: 14, color: "white" }}>
      Tapiwa
      {Cookies.get("username")}
    </span>
  </div>
);

const options = [<UpdatePreferences />];

const UserOptions = () => (
  <Dropdown
    trigger={trigger}
    options={options}
    pointing="top left"
    icon={null}
  />
);

export default UserOptions;
