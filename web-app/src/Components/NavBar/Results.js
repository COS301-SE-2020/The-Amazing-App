import React from "react";
import {Header, Modal,  Form, Button } from "semantic-ui-react";
import Cookies from 'js-cookie';
import axios from 'axios';
export default axios.create(
  {
    baseURL : 'https://console.firebase.google.com/project/the-amazing-app-77843/firestore/data/Users/1jcyEtFSAflH0Re4Grxx' 
  }
)