import React from 'react';
import map from "./Assets/map.jpg";
import Footer from './NavBar/Footer'
import Nav from './NavBar/navBar'

class HomePage extends React.Component
{
    render()
    {
        return <div>
            <Nav />
        <h3 style={{textAlign: "center", color: "#FF4500", fontWeight: "bold", marginTop: 12, marginBottom: 12}}>
            The Amazing App
            <i className="map marker alternate icon"></i>
        </h3>
        <img src={map} alt="map1" style={{width: 400, marginRight: 50}} />
        <p style={{marginRight: 100, marginLeft: 100, fontSize: 18, float: "left", width:550, marginTop:90}}>The Amazing App is a mobile-app location based game in which the game for the mobile app is created using a website. A website is used to create the game then the game creators will send an invite code of the game to the team members. The game can be played in groups or a player can choose to play the game alone. The game is created with markers on the map where players have to physically visit in order to solve riddles and retrieve information then move on to the next level until all the markers placed by the creator have been visited. The team that solves all the riddles or that has retrieved information under the time frame specified by the creator will be the winners. </p>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
    </div>;
    }
}

export default HomePage;