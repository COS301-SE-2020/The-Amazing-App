import React from "react";
import { Icon, Image, Item } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import image3 from "../../../../Assets/detective.jpg";
import image4 from "../../../../Assets/quest.png";
import image5 from "../../../../Assets/octopus.png";
import GameSummary from './GameSummary'

const MyGames = ({projects}) => {
  
    return (
      <div>
        { projects && projects.map(project => {
          return (
          <GameSummary project={project} key={project.id} />
          )
                })

        }
        </div>
     
    );
  }

export default MyGames;
