import React, { useState } from "react";
import { Dropdown, Icon, Modal, Button } from "semantic-ui-react";
import image2 from "../../Assets/no_picture.jpg";
import UpdatePreferences from "./UpdatePreferences";
import axios from "axios";
import Cookies from "js-cookie";
import { db } from "../../Config/fbConfig";

let email = Cookies.get("email");
const doc_query = db.collection("Users").where("Email", "==", email);
doc_query.get().then(function (querySnapshot) {
  querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    //setUsername(username);
    //let username = doc.data().Username;
    Cookies.set("username", doc.data().Username, {
      expires: 2,
    });
  });
});
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
      style={{ height: 22, width: 22 }}
    />
    <span style={{ fontSize: 14, color: "white" }}>
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
