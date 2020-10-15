import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import GameName from "./GameName";
import MapModal from "./MapModal";
import Cookies from "js-cookie";
import firebase from "../../../../Config/fbConfig";

const game = {
  name: "",
  description: "",
  game_type: "multiplechoice",
  properties: [],
};

const gameOb = {
  question: "",
  ans1: "",
  ans2: "",
  ans3: "",
  location: "",
};

function MultipleChoice() {
  const [loc, setLocation] = useState("");

  const [inputList, setInputList] = useState([
    {
      question: "",
      ans1: "",
      ans2: "",
      ans3: "",
      address: "",
    },
  ]);

  const updateAddress = (value) => {
    setLocation(value);
  };

  const getGameName = (value) => {
    game.name = value.gameName;
    game.description = value.descrip;
  };

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      {
        question: "",
        ans1: "",
        ans2: "",
        ans3: "",
        address: "",
      },
    ]);
  };

  const addToGameProp = (i) => {
    let obMe = JSON.parse(JSON.stringify(gameOb));
    obMe.question = inputList[i].question;
    obMe.ans1 = inputList[i].ans1;
    obMe.ans2 = inputList[i].ans2;
    obMe.ans3 = inputList[i].ans3;
    obMe.location = loc;
    game.properties.push(obMe);
    //console.log("obMe here " + gameOb);
  };

  function submit() {
    try {
      const db = firebase.firestore().collection("projects");
      db.add({
        ...game,
        user_id: Cookies.get("userid"),
        createdAt: new Date(),
      }).then(() => {
        window.location.href = "/dashboard";
      });
    } catch (err) {
      console.log("Error in creating game");
    }
  }

  return (
    <div className="App">
      <GameName getGameDetails={getGameName} />
      <hr />
      {inputList.map((x, i) => {
        //x.address = location;
        return (
          <div>
            <div className="ui form" style={{ width: 700 }}>
              <div className="field">
                <label>Question</label>
                <input
                  name="question"
                  placeholder="Enter Question..."
                  value={x.question}
                  onChange={(e) => handleInputChange(e, i)}
                />
              </div>
            </div>
            <div className="ui form" style={{ marginTop: 15 }}>
              <div className="three fields">
                <div className="field">
                  <label>Answer 1</label>
                  <input
                    className="ml10"
                    name="ans1"
                    placeholder="Enter the correct answer..."
                    value={x.ans1}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div className="field">
                  <label>Answer 2</label>
                  <input
                    className="ml10"
                    name="ans2"
                    placeholder="Enter other answer..."
                    value={x.ans2}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
                <div className="field">
                  <label>Answer 3</label>
                  <input
                    className="ml10"
                    name="ans3"
                    placeholder="Enter other answer..."
                    value={x.ans3}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </div>
              </div>
            </div>
            <div className="ui form" style={{ marginTop: 15 }}>
              <MapModal getAddress={updateAddress} />
              <Button
                style={{
                  backgroundColor: "#2A9D8F",
                  color: "white",
                  marginTop: 10,
                }}
                onClick={() => addToGameProp(i)}
              >
                <i className="checkmark icon"></i>
                Save
              </Button>
              <div className="ui form" style={{ marginTop: 15, width: 520 }}>
                <div className="field disabled" style={{ color: "grey" }}>
                  <input
                    type="hidden"
                    className="ml10"
                    name="address"
                    value=""
                    onChange={(e) => handleInputChange(e, i)}
                    placeholder="Selected Location Will Appear Here..."
                  />
                </div>
              </div>
            </div>
            <div className="btn-box">
              {inputList.length !== 1 && (
                <Button
                  style={{
                    backgroundColor: "#2A9D8F",
                    color: "white",
                    marginTop: 10,
                  }}
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove Qstn
                </Button>
              )}
              {inputList.length - 1 === i && (
                <Button
                  style={{
                    backgroundColor: "#2A9D8F",
                    color: "white",
                    marginTop: 10,
                  }}
                  onClick={handleAddClick}
                >
                  Add Qstn
                </Button>
              )}
            </div>
          </div>
        );
      })}
      <Button
        style={{ marginTop: 20, backgroundColor: "#2A9D8F", color: "white" }}
        onClick={() => submit()}
      >
        Submit Game
      </Button>
    </div>
  );
}

export default MultipleChoice;
