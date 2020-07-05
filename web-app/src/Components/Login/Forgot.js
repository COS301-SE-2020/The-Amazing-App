import React from 'react';
import './reset.css'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Forgot extends React.Component{

    state = {email:"",err:""}
    onFormSubmit=event=>{
        event.PreventDefault();
        /*checking  if the field is filled in*/
        if(this.state.email=="")
         {
             this.setState({err:"Please fill in email."});
         }
         else{
             /* regex valid email*/
            const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            /*checking if email is valid */
            if (regEmail.test(this.state.email) == false){
                this.setState({err:"Please enter a valid email address!"});
            }
            else {
                const data = {"email": this.state.email}
                axios.post('http://localhost:8000/api/auth/Resetpassword/0042542ae44e93cbaca5c444e666b84d5fa4163e',data)  
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    if(res.status == 200){
                    
                    
                    
                    }
                })
            }
         }
    }
    render()
{
    return(<div>
       <div class = "resetPage" >
           <br/>
           <br/>
           <br/>
           <br/>
            <span class="resetContainer">
                
                <div>
                    <br/>
                <form onSubmit={this.onFormSubmit}>
                
                Email address: <input id="email" type="email" name="email"onChange={(e)=>this.setState({email:e.target.value})}/>
                <div id="input">
                    <Link to="/Reset">
                    <input type="submit" id="resetbtn" value="Send" />
                    </Link>
                </div>
                </form>
                </div>
            </span> 
        </div>
    </div>
    );
}

}