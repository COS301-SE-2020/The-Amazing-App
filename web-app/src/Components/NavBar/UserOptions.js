import React, { useState } from "react";
import { Dropdown, Icon, Modal, Button } from "semantic-ui-react";
import image2 from "../../Assets/no_picture.jpg";
import UpdatePreferences from "./UpdatePreferences";
import axios from "axios";
import Cookies from "js-cookie";
import { db } from "../../Config/fbConfig";

let email = Cookies.get("email");
if (email) {
  const doc_query = db.collection("Users").where("Email", "==", email);
  doc_query.get().then(function (querySnapshot) {
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      //setUsername(username);
      //let username = doc.data().Username;
      Cookies.set("username", doc.data().Username, {
        expires: 1,
      });
    });
  });
}

const trigger = (
  <div>
    <img
      src={image2}
      className="ui avatar image"
      alt="userImage"
      style={{ height: 22, width: 22 }}
    />
    <span style={{ fontSize: 14, color: "white" }}>{Cookies.get("email")}</span>
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
