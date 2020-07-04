import React from 'react';
import './reset.css'
import axios from 'axios';

export default class Reset extends React.Component {
    state={password:"",password1:"", err:""}
    onFormSubmit=event=>{
        event.preventDefault();
        //checking  if the  fields are filled in
        if (this.state.password == "" || this.state.password1 == "")
        {
            this.setState({err:"Please fill in all the fields!"});
        }
        else
           {
            const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            //checking if password is correct 
            if (regPassword.test(this.state.password) == false){
                this.setState({err:"Password must contain 1 uppercase letter, 1 lowercase letter,1 number, 1 special character and must be 8 characters long!"});
            }
            else  if (this.state.password != this.state.password1)
            {
                this.setState({err:"make sure the password match"});
            }
            else {
                const data = {"password": this.state.password}
                
            
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
                
                New Password: <input id="password" type="password" name="password" onChange={(e)=>this.setState({password:e.target.value})}/>
                <p id="error">{this.state.err}</p>
                Confirm password: <input id="password" type="password" name="password" onChange={(e)=>this.setState({password1:e.target.value})}/>
                <div id="input">
                    <input type="submit" id="resetbtn" value="Reset" />
                    
                </div>
                </form>
                </div>
            </span> 
        </div>
    </div>
    );
}
  
}
