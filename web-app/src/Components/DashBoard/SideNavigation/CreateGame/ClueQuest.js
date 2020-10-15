import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import GameName from "./GameName";
import MapModal from "./MapModal";
import Cookies from "js-cookie";
import firebase from "../../../../Config/fbConfig";

const game = {
  name: "",
  description: "",
  game_type: "cluesquest",
  properties: [],
};

const gameOb = {
  question: "",
  location: "",
};

function ClueQuest() {
  const [loc, setLocation] = useState("");

  const [inputList, setInputList] = useState([
    {
      question: "",
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
        address: "",
      },
    ]);
  };

  const addToGameProp = (i) => {
    let obMe = JSON.parse(JSON.stringify(gameOb));
    obMe.question = inputList[i].question;
    obMe.location = loc;
    game.properties.push(obMe);
  };

  function submit() {
    //console.log(JSON.stringify(game));
    //console.log("Game is here " + game.properties);
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
                <label>Clue</label>
                <input
                  name="question"
                  placeholder="Enter Clue..."
                  value={x.question}
                  onChange={(e) => handleInputChange(e, i)}
                />
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

export default ClueQuest;
